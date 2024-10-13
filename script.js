let reviews=[
    {
        id:1,
        img:"https://images.pexels.com/photos/28570307/pexels-photo-28570307/free-photo-of-professional-portrait-of-a-confident-young-adult.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        Name:"Alex ander",
        title:"frontend",
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit
         Nemo dolores ea officiis odit, tenetur expedita omnis dolorum libero eius doloremque`,




    },
    {
        id:2,
        img:"https://images.pexels.com/photos/5467596/pexels-photo-5467596.jpeg",

        Name:"john ander",
        title:"ui ux",
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit
         Nemo dolores ea officiis odit, tenetur expedita omnis dolorum libero eius doloremque`,

    },
    {
        id:3,
        img:"https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        Name:"Ali ander",
        title:"banker",
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit
         Nemo dolores ea officiis odit, tenetur expedita omnis dolorum libero eius doloremque`,

    },
    {
        id:4,
        img:"https://images.pexels.com/photos/5649416/pexels-photo-5649416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        Name:"alaa ander",
        title:"backend",
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit
         Nemo dolores ea officiis odit, tenetur expedita omnis dolorum libero eius doloremque`,

    }
];
const img_person=document.getElementById('img-person');
const Name=document.getElementById('Name');
const title=document.getElementById('title');
const desc=document.getElementById('desc');
const star=document.getElementsByClassName('star');
const prevbtn=document.getElementById('prev');
const afterbtn=document.getElementById('after');

let currentitem=1;

//load initail item
window.addEventListener('DOMContentLoaded',function(){
showperson(currentitem);
});
function showperson(person){
    const item=reviews[person];
    img_person.src=item.img;
    Name.innerHTML=item.Name;
    title.innerHTML=item.title;
    desc.innerHTML=item.desc;

}

prevbtn.addEventListener("click",function(){
    
        currentitem--;
 if(currentitem<0){
        currentitem=reviews.length;
    }
    showperson(currentitem);

});
afterbtn.addEventListener("click",function(){
    
        currentitem++;
    
     if(currentitem>reviews.length-1){
        currentitem=0;
    }
    showperson(currentitem);


});

document.addEventListener('DOMContentLoaded', function() {

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const close = document.getElementById('close');
// const cards=document.getElementById("cards");

const cards=document.querySelectorAll("#child");
const cardimg=document.getElementById("imgcard");
const iconcard=document.getElementById("iconcard");
const iconmodal=document.getElementById("iconmodal");

cards.forEach(function(card){
card.addEventListener('click',function(){
    const imgSrc = this.querySelector('#imgcard').src;
modal.style.display="block";
modalImg.src=imgSrc;
iconmodal.innerHTML=iconcard;
})
});

close.onclick=function(){
    modal.style.display="none";
    console.log("modal is closwd")
}
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
});


const date=document.getElementById("date");
date.innerHTML=new Date().getFullYear();

const nav=document.getElementById("nav");
const toplink=document.getElementById("toplink");


window.addEventListener("scroll",function(){
const scrollheight=window.scrollY;
const navHeight = nav.offsetTop;
if(scrollheight>navHeight){
    nav.classList.add('fixed');
}else{
    nav.classList.remove('fixed');

}
if(scrollheight>500){
toplink.classList.add('show-link');
}else{
    toplink.classList.remove('show-link');

}

});
const links=document.querySelectorAll("#link");
links.forEach(function(link){
link.addEventListener('click',function(e){
    e.preventDefault();
  const sec=  e.currentTarget.getAttribute('href').slice(1);
  const element=document.getElementById(sec);
  const navHe = nav.offsetTop;

  let position=element.offsetTop;
  window.scrollTo({
    left:0,
    top:position-navHe,
    block: 'start' // Scroll to the top of the section


  })
  console.log(element);
console.log(sec);
})
})