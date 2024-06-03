
$(window).scroll(function() {
    var a = 0;
    var oTop = $('.company').offset().top - window.innerHeight;
    
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },
  
          {
  
            duration: 500,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              
            }
  
          });
      });
      a = 1;
    }
  
  });


const pageContent=document.querySelector(".fullpage")
const overLay=document.querySelector(".overlay")
const form= document.querySelector(".block")
var projectImage = document.querySelector("[project-image]")
var projects= document.querySelectorAll("[project]")
var slider=document.querySelector(".slider")
var sliderDots=document.querySelectorAll(".dot")
const sliderWidth=getComputedStyle(slider).width
var sliderParent=document.querySelector(".slider-parent");
var width1=slider.scrollWidth*(1/3);
var width2=slider.scrollWidth*(3/5);


function contact () {
   
    overLay.classList.remove("hidden")
    pageContent.classList.add("freeze-pointers")
}


overLay.addEventListener("click", ()=>{
    overLay.classList.add("hidden")

})
form.addEventListener("click",(event)=>{
    event.stopPropagation()
} )


var images=[
    "./assets/image.png",
    "./assets/project1.jpg", 
    "./assets/images.jpg"
]



projects.forEach(project => project.addEventListener('click', ()=>{
   

    projects.forEach(description =>{
        
        if(description.getAttribute("index")===project.getAttribute("index")){
            description.classList.add("select");
            
        }
        
        else
        description.classList.remove("select")
    })
    projectImage.src=images[ project.getAttribute("index")]
    
}));

sliderDots.forEach((SliderDot)=>{
    SliderDot.addEventListener("click", ()=>{

        sliderDots.forEach(dot =>{
            if(dot.getAttribute("order")===SliderDot.getAttribute("order")){
               
               dot.innerHTML="<img src='./assets/1.svg' class='imgSelect'/>"
               if(SliderDot.getAttribute("order")==1)
                sliderParent.scrollLeft=0;
               else
               sliderParent.scrollLeft=slider.scrollWidth-slider.scrollWidth/(SliderDot.getAttribute("order"));
              
            }
            else{
                // console.log( "un-clicked",dot.getAttribute("order") )
                dot.innerHTML='<img src="./assets/2.svg"/>'
            }
        })
      
    })
}

)
sliderParent.addEventListener("scroll", (event)=>{
    
    if(sliderParent.scrollLeft<width1 ){
        sliderDots[0].innerHTML="<img src='./assets/1.svg' class='imgSelect'/>"
        sliderDots[1].innerHTML='<img src="./assets/2.svg"/>'
        sliderDots[2].innerHTML='<img src="./assets/2.svg"/>'
        
    }
    else if(sliderParent.scrollLeft<width2){
        sliderDots[0].innerHTML='<img src="./assets/2.svg"/>'
        sliderDots[1].innerHTML="<img src='./assets/1.svg' class='imgSelect'/>"
        sliderDots[2].innerHTML='<img src="./assets/2.svg"/>'

    }
    else{
        sliderDots[0].innerHTML='<img src="./assets/2.svg"/>'
        sliderDots[1].innerHTML='<img src="./assets/2.svg"/>'
        sliderDots[2].innerHTML="<img src='./assets/1.svg' class='imgSelect'/>"
    }
})