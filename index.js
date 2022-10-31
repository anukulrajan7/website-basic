document.querySelector("#list-item").addEventListener("click",()=>{
    document.getElementById("list-item").classList.toggle("active");
    
    document.querySelector(".navscont").classList.toggle("navchange");
    document.querySelector(".nav-item").classList.toggle("ulchange");
})