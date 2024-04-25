import projects from "../DATABASE/projects.js";


//----------------------------------------NAVBAR----------------------------------------//


//----------NAVBAR----------//
const link = document.querySelectorAll('.link');
link.forEach((specLink)=>{
    specLink.addEventListener('click', ()=>{
        const section = specLink.dataset.section;
        document.querySelector(section).scrollIntoView({
            behavior:"smooth"
        });

        CloseNavBar(navBar,closeNavBar,OpenNavBar);
    });
});



// -------------------- MOBILE VERSION -------------------- //
let navBar = document.getElementById('mobile-navbar');
let OpenNavBar = document.getElementById('open-navbar');
let closeNavBar = document.getElementById('close-btn');

// close by default"
navBar.style.display = 'none';
closeNavBar.style.display = 'none';

OpenNavBar.addEventListener('click',()=>{
    navBar.style.display = 'block';
    OpenNavBar.style.display = 'none';
    closeNavBar.style.display = 'block';
});

closeNavBar.addEventListener('click', ()=>{
    navBar.style.display = 'none';
    closeNavBar.style.display = 'none';
    OpenNavBar.style.display = 'block';
});


function CloseNavBar(NavBar,CloseBtn,OpenBtn){
    document.getElementById(`${navBar.id}`).style.display = 'none';
    document.getElementById(`${CloseBtn.id}`).style.display = 'none';
    document.getElementById(`${OpenBtn.id}`).style.display = 'block';
}

//----------------------BRIGHT & DARK MODE----------------------//
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const ToogleMode = document.querySelectorAll('#toogleMode');

// by default it's light mode :
let isBRIGHT = true;

ToogleMode.forEach(btn=>{
    btn.addEventListener('click',()=>{
        //--------------------------DARK MODE--------------------------//
        if(isBRIGHT){
            // update background colors of the elements :
            header.style.backgroundColor = '#31363F';
            main.style.background = '#222831';
            footer.style.backgroundColor = '#31363F';
            isBRIGHT=false;
        //--------------------------BRIGHT MODE--------------------------//
        }else{
            // update background colors of the elements :
            header.style.backgroundColor = 'rgb(0, 12, 67)';
            main.style.background = 'linear-gradient(243deg, rgba(5,44,126,1) 0%, rgba(12,23,53,1) 100%)';
            footer.style.backgroundColor = 'rgb(0, 12, 67)';
            isBRIGHT=true;
        }
        btnChecker(isBRIGHT);
        CloseNavBar(navBar,closeNavBar,OpenNavBar);
    })
})

function btnChecker(status){
    if(!status){
        document.querySelectorAll(`.DARK_btn`).forEach( element =>{
            element.style.display='none';
        });

        document.querySelectorAll(`.BRIGHT_btn`).forEach( element =>{
            element.style.display='block';
        });

    }else{
        document.querySelectorAll(`.DARK_btn`).forEach( element =>{
            element.style.display='block';
        });
        document.querySelectorAll(`.BRIGHT_btn`).forEach( element =>{
            element.style.display='none';
        });
    }
}


//---------------------- HEADER ----------------------//
let takemeupBtn = document.getElementById('icon__TakeMeup');
window.addEventListener("scroll", () => {
    if (window.scrollY > 0 && isBRIGHT) {
        header.style.boxShadow = '.2px .2px 5px whitesmoke';
        header.style.backgroundColor = 'rgb(0, 12, 67)';
        takemeupBtn.style.display = 'block';
    }else if (window.scrollY > 0 && isBRIGHT===false) {
        header.style.boxShadow = '.2px .2px 5px whitesmoke';
        header.style.backgroundColor = '#31363F';
        takemeupBtn.style.display = 'block';
    }
    else {
        header.style.background = 'transparent';
        header.style.boxShadow = 'none';
        takemeupBtn.style.display = 'none';
    }

});


//----------------------MAIN SECTION ----------------------//

const HireMeBtn = document.getElementById('HireMeBtn');

HireMeBtn.addEventListener('click',()=>{
    document.querySelector('#section6').scrollIntoView({
        behavior:"smooth"
    });

    let emailSubject = document.getElementById('EmailSubject').value = 'Looking for a Talented Frontend Developer: Join Us!';
})
//---------------------- PORTFOLIO SLIDER ----------------------//

// ELEMENTS OF THE SLIDER :
const project__img = document.getElementById('project__img');
const project__name = document.getElementById('project__name');
const project__date = document.getElementById('project__date');
const project__description = document.querySelectorAll('#project__description');
const project__link = document.getElementById('project__link');

// TOGGLE ICONS
const rightBtn = document.getElementById('rightIcon');
const leftBtn = document.getElementById('leftIcon');

let index = 0;

// APPEND CIRCLES SEPENDS ON THE PROJECTS LENGTH INSIDE THE CIRCLE DIV :

const circlesDiv = document.querySelector('.slider__circles');
// PROJECT LENGTH
let list_project = [];

for(const length in projects){
    list_project.push(length)

    const circles  = document.createElement('div');
    circles.className = 'circle';
    circlesDiv.append(circles);
}

const circles = document.querySelectorAll('.circle');
circles[index].className = 'circle__active';

// DEFAULT CHOOSEN PROJECT
function toggle(index){

    let default_project = Object.values(projects)[index];
    let project_img = default_project.image;
    let project_name = default_project.name;
    let project_date = default_project.date;
    let project_description = default_project.description;
    let project_link = default_project.link;

    // DISPLAY DATA BY DEFAULT
    project__img.setAttribute('src', `${project_img}`);
    project__name.textContent = project_name;
    project__date.textContent = project_date;
    project__description.forEach(Description =>{
        Description.textContent = project_description;
    })
    
    
    project__link.setAttribute('href', project_link);

};

function toggleRight(){
    if(index == list_project.length - 1){
        circles[index].className = 'circle';
        index = 0;
        circles[index].className = 'circle__active';
        toggle(index);
    }else{
        circles[index].className = 'circle';
        index +=1;
        circles[index].className = 'circle__active';
        toggle(index);
    }
    toggleAnimation();
};

const mainSlider = document.querySelector('.portfolio__content');

// Function to toggle animation class
function toggleAnimation() {
    mainSlider.classList.remove('fadeIn');
    void mainSlider.offsetWidth; // Trigger reflow
    mainSlider.classList.add('fadeIn');
}

// TOGGLE BY CLICKING ON ICONS
rightBtn.addEventListener('click', () =>{
    if(index == list_project.length - 1){
        circles[index].className = 'circle';
        index = 0;
        circles[index].className = 'circle__active';
        toggle(index);
    }else{
        circles[index].className = 'circle';
        index +=1;
        circles[index].className = 'circle__active';
        toggle(index);
    }
    toggleAnimation();
});


leftBtn.addEventListener('click', () => {
    if(index == 0){
        circles[index].className = 'circle';
        index = list_project.length -1;
        circles[index].className = 'circle__active';
        toggle(index);
    }else{
        circles[index].className = 'circle';
        index -=1;
        circles[index].className = 'circle__active';
        toggle(index);
    }
    toggleAnimation();
});

toggle(index);
setInterval(toggleRight,5000);


// -------------------- OTHERS -------------------- //

// ----- TAKE ME UP ICON ----- //
const takemeup_btn = document.getElementById('icon__TakeMeup');
takemeup_btn.addEventListener('click', () => {
    document.querySelector('main').scrollIntoView({
        behavior:"smooth"
    });
});


