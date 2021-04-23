/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

                  /* Define Global Variables  */

     const allSections = document.querySelectorAll('section');
     const navBar = document.getElementById("navbar__list");

              // create fragment for performance and speed
     const fragmentContainer = document.createDocumentFragment();  

                  /*  End Global Variables   */
    
             /*   Start Functions   */

             // 1- getting data-nav attribute values for all sections

     allSections.forEach( ( section ) => {
        const sectionDataNav = section.getAttribute('data-nav');
       
                    // 2- Build menu 

        const newLi = document.createElement("li");
        const newLink = document.createElement("a");
        newLink.classList.add("menu__link");
        newLink.innerHTML = sectionDataNav;
        newLi.appendChild(newLink);
        fragmentContainer.appendChild(newLi);

              //3- Scroll to section on link click (add event on each link tha nav )

        newLink.addEventListener("click" , function(){
            section.scrollIntoView(
                { behavior : "smooth" }
                );
        })
    });
                // build the nav (appending fragment to the UL element )

    navBar.appendChild(fragmentContainer)

            
        // Scroll to anchor ID using scrollTO event

    const allLinks = document.querySelectorAll(".menu__link")
    
     window.addEventListener('scroll' , function(){
        allSections.forEach(sec => {
            const topOfSection = sec.getBoundingClientRect().top;

                // Set sections as active
            if(topOfSection >= 0 && topOfSection <= 300){ // this is active section
               
                allSections.forEach(element => {
                    // remove class 'your-active-class' from all sections  
                    element.classList.remove('your-active-class')
                });
                    
                // Add class 'your-active-class' to section when near top of viewport
                sec.classList.add("your-active-class");


                    // search for active link 
                const activeSectionDataNav = sec.getAttribute("data-nav")
                  
                allLinks.forEach(link => {
                    if(link.innerHTML === activeSectionDataNav){ // this is active link 
                         
                        // remove class 'active' from all links
                        allLinks.forEach(l => {
                            l.classList.remove("active")
                        })
                             // add class 'active' to active link 
                         link.classList.add("active")    
        
                    }     
                });
                   
            }
            
        })
    })
    



