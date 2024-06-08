
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
    let betolto = document.getElementById("betolto")
    betolto.remove()

    upperbar.style.display = "none"

    iras("bbfelirat", "eleje")
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
    if(id) {
        let div = document.getElementById("showcaseimgs-" + id)

        let parentproject = null

        
        parentproject = document.querySelectorAll(".card")[id - 1]


        if (div) {
            if (parentproject) {    
                if (div.style.display == "none") {
                    //mutasd

                    parentproject.style.animationName = "projectgrow"
                    parentproject.style.animationPlayState = "running"

                    div.style.display = ""

                    setTimeout(() => {
                        parentproject.scrollIntoView({behavior: "smooth"})
                    }, 500)

                } else {
                    //nemutasd

                    parentproject.style.animationName = "projectshrink"
                    parentproject.style.animationPlayState = "running"


                    setTimeout(() => {
                        parentproject.scrollIntoView({behavior: "smooth"})
                        div.style.display = "none"
                    }, 500)
                }
            }
        }
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