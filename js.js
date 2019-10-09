var ask=document.getElementById("ask");
var print=document.querySelector("#ans");
var button=document.querySelector("#click");
button.addEventListener("click", function (element) {
 
    switch(ask.value.toUpperCase()) {
        case "TEA":
            print.innerHTML=("Tea coming up.");
        break;
        case "COFFEE":
            print.innerHTML=("Coffee coming up.");
            break;
        case "WATER":
            print.innerHTML=("Water? Great choice")
            break;
            case "RELATIONSHIP":
                    print.innerHTML=("We're just friends")
                    break;
        default:
            print.innerHTML=("Sorry, but we dont serve "+ask.value+".");
            break;
    
    }
   
});