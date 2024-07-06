/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
      navToggle= document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*======MENU SHOW =====*/
/* validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*======MENU HIDDEN =====*/
/* validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link,we remove the show-menu c 
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))



/*=============== SHADOW HEADER ===============*/
const shadowHeader =() =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height ,add the shaddow-header class to the
    this.scrollY >=50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_tx1q1dg','template_nf712zd','#contact-form','0UCN3aIgWL7v1kwES')
    .then(() =>{
        //show sent message
        contactMessage.textContent = 'Message Sent successfully ✅'

        //remove message after 5 sec
        setTimeout(() =>{
            contactMessage.textContent=''
        }, 5000)

        //clear input fields
        contactForm.reset()
    }, () =>{
        //show error message
        contactForm.textContent='Message not sent(service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

sr.reveal('.home__perfil', {origin: 'right'})
sr.reveal('.home__name, .home__info', {origin: 'left'})