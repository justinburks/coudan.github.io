
const servicePage = document.querySelector('.services');
const contactPage = document.querySelector('.extras');
const pricingPage = document.querySelector('.pricing');

const serviceLink = document.querySelector('.services-link');
const pricingLink = document.querySelector('.pricing-link');
const contactLink = document.querySelector('.contact-link');
const scheduleLink = document.querySelector('.schedule-link');


const sun = document.querySelector('.sun');
const root = document.querySelector(':root');
const bigRoot = root.style;



        const div = document.querySelector('.controller-div');


const linkArr = document.querySelectorAll('.link');



function changeElementStyle(el, classs) {
    bigRoot.setProperty(`${el}`, `${classs}`);
}

// const styleVar = changeElementStyle(el = elementClass);
var elementClass = (window.pageY / 5);

var thisVar =  window.scrollY / 5;
var elementClass2 = `${thisVar}px`;

// window.addEventListener('DOMContentLoaded', () => {
//     elementClass = '115deg';
//     changeElementStyle('--rotate');
// }
// )

// utils 

    function seasonAnime() {
        if (!(div.classList.contains('move'))) {
        div.classList.add('move');
    }
        elementClass2 = `${window.scrollY}px`;
        changeElementStyle('--mover', elementClass2);
    }

function rotate() {
    // console.log(window.scrollY);
    // console.log(sun.scrollY);
    if (!(sun.classList.contains('rotate'))) {
        sun.classList.add('rotate');
    }


        elementClass = `${window.scrollY/5}deg`;
        changeElementStyle('--rotate', elementClass); 


}

// window.addEventListener('scroll', rotate);

function scroll() {
    console.log('working');
    var link;
    var that = this;
    function linkUP(that) {
        that === serviceLink ? link = 'service' :
        that === pricingLink ? link = 'pricing' :
        that === contactLink ? link = 'contact' :
        that === scheduleLink ? link = 'schedule' :
        null;
        console.log(this);
        return link;
    };
    function scrollTo(link) {
        console.log('still working too');
    link === 'pricing' ? pricingPage.scrollIntoView({behavior: 'smooth' , block: 'center'}) :
    link === 'service' ? servicePage.scrollIntoView({behavior: 'smooth' , block: 'center'}) :
    link === 'contact' ? contactPage.scrollIntoView({behavior: 'smooth' , block: 'center'}) :
    link === 'schedule' ? servicePage.scrollIntoView({behavior: 'smooth' , block: 'center'}): 
        null
    };

    const linkFunc = linkUP(that);
    const scrollFunc = scrollTo(link);

};

function handleNav() {
    this.classList.add('hover-active');

};

function handleLeave() {
    this.classList.remove('hover-active');

}

serviceLink.addEventListener('click', scroll);
pricingLink.addEventListener('click', scroll);
contactLink.addEventListener('click', scroll);
scheduleLink.addEventListener('click', scroll);

serviceLink.addEventListener('mouseover', handleNav);
pricingLink.addEventListener('mouseover', handleNav);
contactLink.addEventListener('mouseover', handleNav);
scheduleLink.addEventListener('mouseover', handleNav);

serviceLink.addEventListener('mouseleave', handleLeave);
pricingLink.addEventListener('mouseleave', handleLeave);
contactLink.addEventListener('mouseleave', handleLeave);
scheduleLink.addEventListener('mouseleave', handleLeave);


    



// OPACITY WIDGET

//
var a = window.scrollY;
var i = 0;
const section = document.querySelector('.about');

const sectionStart = section.getBoundingClientRect().top;
const sectionEnd = section.getBoundingClientRect().bottom
const sectionHeight = section.getBoundingClientRect().height;


// const sectionEnd = section.getBoundingClientRect().bottom - sectionHeight;


    var a = sectionStart;
    var b = sectionEnd;
    var c = sectionHeight;

    var e = window.scrollY;

    function getTop() {

        
         return (((window.scrollY - sectionStart + 325) / 1000) * 2);

    }

    function getBottom() {
        var i2 = ((window.scrollY - sectionEnd) / 100);
        return i2;
    }

        
    function isActive() { 
        var q;
        if( getTop() >= 0  && getBottom() >= -731 && getBottom() <= -430) {
        q = true
        console.log('active')
        return q;
        } 
    } 
    
    var opacity = getTop();
    


window.addEventListener('scroll', () => {
        i++;
        if(getTop() > -.7 && getTop() < 1.3) {

            changeElementStyle('--opac', `${getTop() + .25}`)
            const op = document.querySelector('.about');
            if (!(op.classList.contains('active'))) {
                    op.classList.add('active');
            }
            if ((getTop() + .5) > 1 && getTop() < 2) {
                // triggerAnimation();
                changeElementStyle('--opac', `${Math.abs(2-getTop())/1.5}`);
                console.log(`${Math.abs(getTop() - 2)}`);
        }  
        
            console.log('active')           
        }
        // if(getTop() <= 0) { 
        //     console.log('inactive')}
        // if(getBottom() <= 0) {
        //     console.log()
        // }


        

        if (i % 3 === 0) {
    console.log('opacity:  ' + `${getTop()}`)
        }
})





