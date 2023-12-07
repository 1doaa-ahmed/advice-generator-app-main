var div = document.getElementById("line");

function myFunction(x) {
    if (x.matches) { 
        div.innerHTML = "";
        div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg> ' ;
    }
}
  
var x = window.matchMedia("(max-width: 375px)")

myFunction(x);


x.addEventListener("change", function() {
    myFunction(x);
})



function change(){
    fetch("https://api.adviceslip.com/advice").then((result) => {
        let advice = result.json();
        return advice;

    }).then((advice)=> {
        var id = document.getElementById("id");
        var text = document.getElementById("text");
        id.innerText = advice.slip.id;
        text.innerText = advice.slip.advice;
    })
    
}