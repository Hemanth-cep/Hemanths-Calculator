// for time to be displayed on the calculator----------------------------------
function showdate(){
    let time = document.getElementById("time");
    let date = new Date()
    let hours = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    time.innerHTML = hours+" : "+min+" : "+sec
    
}
setInterval(showdate,1000)
//------------------------------------------------------------------------------
// for click animations for the buttons------------------------------------------
button_array=[];
function clicked(){
    var clicked_button = this.innerHTML;  
    show_animation(clicked_button);
    displaykeys(clicked_button)
}
function show_animation(clicked_button){
    // for special charecters only , cause special chars cannot have special char class names
    if(clicked_button == "%"){
        let thebutton = document.querySelector(".b3");
    thebutton.classList.add("press_animation")
    setTimeout(function(){
        thebutton.classList.remove("press_animation")
    },100);
    }

    if(clicked_button == "/"){
        let thebutton = document.querySelector(".b4");
    thebutton.classList.add("press_animation")
    setTimeout(function(){
        thebutton.classList.remove("press_animation")
    },100);
    }

    if(clicked_button == "-"){
        let thebutton = document.querySelector(".b12");
    thebutton.classList.add("press_animation")
    setTimeout(function(){
        thebutton.classList.remove("press_animation")
    },100);
    }

    if(clicked_button == "+"){
        let thebutton = document.querySelector(".b16");
    thebutton.classList.add("press_animation")
    setTimeout(function(){
        thebutton.classList.remove("press_animation")
    },100);
    }

    if(clicked_button == "."){
        let thebutton = document.querySelector(".b18");
    thebutton.classList.add("press_animation")
    setTimeout(function(){
        thebutton.classList.remove("press_animation")
    },100);
    }

    if(clicked_button == "="){
        let thebutton = document.querySelector(".b19");
    thebutton.classList.add("animation_click")
    setTimeout(function(){
        thebutton.classList.remove("animation_click")
    },200);
    }

    if(clicked_button == "*"){
        let thebutton = document.querySelector(".b8");
    thebutton.classList.add("press_animation")
    setTimeout(function(){
        thebutton.classList.remove("press_animation")
    },200);
    }

    // for all the remaining
    if(clicked_button != ("%") && clicked_button != ("/") && clicked_button != ("-") && clicked_button != ("+") && clicked_button != ("=") && clicked_button != (".") && clicked_button != ("*")){
    let thebutton = document.querySelector(".a"+clicked_button);
    thebutton.classList.add("press_animation")
    setTimeout(function(){
        thebutton.classList.remove("press_animation")
    },100);
    }
}
    

let buttons_length = document.querySelectorAll("button").length;
for(i=0;i<buttons_length;i++){
    let all_buttons = document.querySelectorAll("button")[i];
    all_buttons.addEventListener("click",clicked);
}
//------------------------------------------------------------------------------------
// for display the calculation that is going on---------------------------------------------------
function show_calculation(){
    let n = button_array.length
    let display_answer = document.getElementById("calculations")
    if(n == 0){
        display_answer.innerHTML="syntax-error"
    }
    else{
        str=''
    for(j=0;j<n;j++){
        str = str + button_array[j]
    }
    display_answer.innerHTML=(eval(str))
    button_array=[];
    button_array.push(eval(str));
    }   
}
// -----
function displaykeys(clicked_button){
    let dis_button = document.getElementById("calculations")
    button_array.push(clicked_button)
    let n =button_array.length;
    dis_button.innerHTML="";

    if (clicked_button != "C" && clicked_button != "b" && clicked_button != "="){
        for(i=0;i<n;i++){
            dis_button.innerHTML=dis_button.innerHTML+button_array[i];
        }
    }
    else if(clicked_button == "b" ){
        dis_button.innerHTML="";
        button_array.pop()
        button_array.pop()
        let n =button_array.length;
        for(i=0;i<n;i++){
            dis_button.innerHTML=dis_button.innerHTML+button_array[i];
        }
    }
    else if(clicked_button == "="){
        button_array.pop()
        let n =button_array.length;
        show_calculation();
    }
    else if(clicked_button == "C"){
        dis_button.innerHTML="";
        button_array=[]
    }
    
}