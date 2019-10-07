var ask=document.getElementById("ask");
var print=document.querySelector("#ans");
var button=document.querySelector("#click");
button.addEventListener("click", function (element) {
 
    switch(ask.value) {
        case "tea":
            print.innerHTML=("Tea? go make yourself tea then");
        break;
        case "coffee":
            print.innerHTML=("Coffee? go make yourself coffee then");
            break;
        default:
            print.innerHTML=("Enter tea or coffee");
            break;
    
    }
   
});