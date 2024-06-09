
/*--------------------------------------------betöltés--------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.style.scrollBehavior = "auto"
    window.scrollTo(0,0)
    
    setTimeout(() => {
        document.documentElement.style.scrollBehavior = "smooth"
    }, 200)
})




let upperbar = document.getElementById("upperbar")

function loaded() {
    window.scrollTo(0,0)
    let betolto = document.getElementById("betolto")
    betolto.remove()
    window.scrollTo(0,0)

    upperbar.style.display = "none"



    iras("bbfelirat", "eleje")
    loadimgs()
    cardheightset()
}






const imgs = document.querySelectorAll("img")

function loadimgs() {
    imgs.forEach(img => {
        if (img.complete) {
            loadedimg(img)
        } else {
            img.addEventListener("load", loadedimg(img))
        }
    })
}



function loadedimg(what) {
    //console.log(what)
    if (what) {
        what.classList.add("loaded")
    }
}








function cardheightset() {
    if (window.innerWidth >= 1350) {
        let cards = document.querySelectorAll(".card")
    
        cards.forEach(card => {
            let imginside = card.querySelector(".fo .showcaseimg img")
            //console.log(imginside)
    
            if (imginside.complete) {
                let foheight = card.querySelector(".fo").clientHeight
                //console.log(foheight)
        
                card.style.maxHeight = foheight + "px"
            }
        })
    } else {
        let cards = document.querySelectorAll(".card")
    
        cards.forEach(card => {
            card.style.maxHeight = "fit-content"
        })
    }
}







/*------------------------------------------------------------------------------------------------------------------------------------*/






/*--------------------------------------------egyéb--------------------------------------------*/
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset

    var bbfelirat = document.getElementById("bbfelirat")
    var bbfeliratPos = bbfelirat.offsetTop

  
  
    if ((bbfeliratPos + 200) > currentScrollPos) {
        upperbar.style.display = "none"
    } else {
        upperbar.style.display = ""
    }
}





function showcaseimgs(id) {
    cardheightset()
    //console.log(id)
    if(id) {
        let div = document.getElementById("showcaseimgs-" + id)

        let parentelem = null
        parentelem = document.querySelectorAll(".card")[id - 1]

        let button = parentelem.querySelector("button")


        if (div) {
            if (parentelem) {    
                if (div.style.display == "none") {
                    //mutasd
                    onshowcaseload("no", parentelem)

                    parentelem.style.animationName = "elemgrow"
                    parentelem.style.animationPlayState = "running"

                    div.style.display = ""

                    button.innerHTML = "Kevesebb kép mutatása"



                    setTimeout(() => {
                        onshowcaseload("yes", parentelem)
                    }, 200)



                    setTimeout(() => {
                        parentelem.scrollIntoView({behavior: "smooth"})
                    }, 500)

                } else {
                    //nemutasd

                    parentelem.style.animationName = "elemshrink"
                    parentelem.style.animationPlayState = "running"


                    button.innerHTML = "Több kép mutatása"



                    setTimeout(() => {
                        onshowcaseload("no", parentelem)
                    }, 450)



                    setTimeout(() => {
                        parentelem.scrollIntoView({behavior: "smooth"})
                        div.style.display = "none"
                    }, 500)
                }
            }
        }
    }
}






function onshowcaseload(tipus, melyik) {
    if (melyik) {
        let imgs = melyik.querySelectorAll(".showcaseimgs img")
    
    
        imgs.forEach(img => {
            if (tipus == "no") {
                img.style.width = "1px"
    
            } else if(tipus == "yes") {
                if (img.complete) {
                    img.style.width = "auto"
                }
            }
        })
    }
}














function iras(element, arg) {

    if (element) {
        var elem = document.getElementById(element)


        if (!arg) {
            var elem = document.getElementById(element)
            
            if (elem) {
                var txt = elem.innerHTML
                elem.innerHTML = ""
            
                var speed = 30;
            
                for (let i = 0; i < txt.length; i++) {
                    setTimeout(() => {
                        elem.innerHTML += txt.charAt(i);  
                    }, 1500 + i*speed);
                }
            }
        }




        if (arg == "eleje") {
            if (elem) {
                var txt = elem.innerHTML
                elem.innerHTML = ""
            
                var speed = 130;
            
                for (let i = 0; i < txt.length; i++) {
                    setTimeout(() => {
                        elem.innerHTML += txt.charAt(i);
                    }, 500 + i*speed);
                }
            }
        }
    }
}







const obsever = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry)

        if(entry.isIntersecting) {
            entry.target.classList.add("show")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => {obsever.observe(el)})

/*------------------------------------------------------------------------------------------------------------------------------------*/