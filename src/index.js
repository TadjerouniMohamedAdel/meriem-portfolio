import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollReveal from 'scrollreveal'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav-link');   

function linkAction(){
/*Active link*/
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');

}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/*SCROLL HOME*/
sr.reveal('.home-title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home-img',{delay: 400}); 
sr.reveal('.home-social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 
sr.reveal('.att-center',{delay: 600}); 
/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 400});
sr.reveal('.tech',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.timeline-item',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 





