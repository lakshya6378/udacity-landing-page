
const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
for(var i=0;i<5;i++)
{
const listItem=document.createElement('li');
listItem.className="nav-item";
let anchor=document.createElement('a');
anchor.className="nav-link";
switch(i)
{
 case 0:anchor.textContent="introduction";
         anchor.setAttribute('href','#introduction');
        break;
 case 1:anchor.textContent="Resources";
 anchor.setAttribute('href',"#Resources");
        break;
 case 2:anchor.textContent="innovation";
 anchor.setAttribute("href","#innovation");
        break;
 case 3:anchor.textContent="about";
 anchor.setAttribute("href","#about")
        break;
 case 4:anchor.textContent="contact";
 anchor.setAttribute("href","#contact")
        break;
}
listItem.appendChild(anchor);
navMenu.appendChild(listItem);
}


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Get all the nav links
const navLinks = document.querySelectorAll('nav a');


navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    const targetId = this.getAttribute('href'); // Get the ID of the target section
    const targetSection = document.querySelector(targetId); // Get the target section
    targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section
  });
});

// Add an event listener to the window object to update the active nav-item on scroll
const sections=document.querySelectorAll('section');
const navli=document.querySelectorAll('.nav-item');
navli[0].classList.add('active1');
function activeMenu(){
    let len=sections.length;
    while(--len && window.scrollY+97<sections[len].offsetTop){}
    navli.forEach(ltx => ltx.classList.remove("active1"));
    navli[len].classList.add("active1");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

