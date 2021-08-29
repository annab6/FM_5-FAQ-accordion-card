let li= document.querySelectorAll(".question");
for(var i=0; i<li.length; i++){
    li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("question")){
            clickedLi = e.target.parentElement;
        }else{
            clickedLi = e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle("openAnswer");
    });
}