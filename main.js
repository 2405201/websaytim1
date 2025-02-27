let inputQiymat = document.getElementById("input-box")
let tugma = document.getElementById("tugma")
let royxat = document.getElementById("royxat")

function vazifaQoshish() {
    let qiymat = inputQiymat.value

    if(qiymat == ""){
        alert("Bo'sh qiymat yo'q")
        return;
    }

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.className = "bore"
    checkbox.style.marginLeft = "100px";
    checkbox.style.border = "none";
    checkbox.style.color = "white";
    checkbox.style.padding = "5px 10px";
    checkbox.style.fontSize = "16px";
    checkbox.style.borderRadius = "5px";
    checkbox.style.cursor = "pointer";
    checkbox.style.marginLeft = "10px"; 
    checkbox.checked = function(){
        list.style.textDecoration = "line-through"
    }

    let list = document.createElement("li")
  
    list.className = "bore"
    list.onclick = function(){
        list.style.textDecoration = "line-through"
        list.style.background = "linear-gradient(135deg, #153677, #4e085f)"
    }

    let ochirishTugma = document.createElement("button")
    ochirishTugma.textContent = "🗑";
    ochirishTugma.onclick = function(){
        list.remove()
    }
    ochirishTugma.style.marginLeft = "10px";
    ochirishTugma.style.border = "none";
    ochirishTugma.style.color = "white";
    ochirishTugma.style.padding = "5px 10px";
    ochirishTugma.style.fontSize = "16px";
    ochirishTugma.style.borderRadius = "5px";
    ochirishTugma.style.cursor = "pointer";
    ochirishTugma.style.marginLeft = "10px"; 
    ochirishTugma.style.background = "linear-gradient(135deg, #e06016,  #555) "



    list.textContent = qiymat
    list.appendChild(checkbox)
  

    list.appendChild(ochirishTugma)

    royxat.appendChild(list)

    inputQiymat.value = ""



}






tugma.addEventListener("click", vazifaQoshish)

inputQiymat.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        vazifaQoshish()
    }
       
})










let raqam = document.getElementById("raqam")
let ikinchi = document.getElementById("ikinchi")
let qoshish = document.getElementById("qoshish")
let ayrish = document.getElementById("ayrish")
let kopaytirish = document.getElementById("kopaytirish")
let bolish = document.getElementById("bolish")
let natija = document.getElementById("natija")


 qoshish.addEventListener("click", function(){
    let raqamQiymat = +raqam.value;
    let ikinchiQiymat = +ikinchi.value;
    let javob = raqamQiymat + ikinchiQiymat;
    natija.textContent = javob;
 })

 ayrish.addEventListener("click", function(){
    let raqamQiymat = +raqam.value;
    let ikinchiQiymat = +ikinchi.value;
    let jala = raqamQiymat - ikinchiQiymat;
    natija.textContent = jala;
 })

 kopaytirish.addEventListener("click", function(){
    let raqamQiymat = +raqam.value;
    let ikinchiQiymat = +ikinchi.value;
    let javoa = raqamQiymat * ikinchiQiymat;
    natija.textContent = javoa;
 })

 bolish.addEventListener("click", function(){
    let raqamQiymat = +raqam.value;
    let ikinchiQiymat = +ikinchi.value;
    let javobi = raqamQiymat / ikinchiQiymat;
    natija.textContent = javobi;
 })







 let uzbek = document.getElementById("uzbek")
 let india = document.getElementById("india")
 let usa = document.getElementById("usa")
 let france = document.getElementById("france")
 
 
 
 function setNumber(countryName) {
     const displayElement = document.getElementById('displayNumber');
     displayElement.textContent = countryName + ' raqam';
 }
 
 document.getElementById('uzbek').addEventListener('click', function() {
     setNumber('O\'zbek');  
 });
 
 document.getElementById('india').addEventListener('click', function() {
     setNumber('Hindistion')
 });
 
 document.getElementById('usa').addEventListener('click', function() {
     setNumber('Amerika');  
 });
 
 document.getElementById('france').addEventListener('click', function() {
     setNumber('Fransiya');  
 });



 let input = document.getElementById('input')
let harorat1 = document.getElementById('harorat1')
let harorat2 = document.getElementById('harorat2')
let ogirlik1 = document.getElementById('ogirlik1')
let ogirlik2 = document.getElementById('ogirlik2')
let masofa1 = document.getElementById('masofa1')
let masofa2 = document.getElementById('masofa2')
let kirit = document.getElementById('kirit')


// haroratlar
harorat1.addEventListener('click', function(){
    let celsiusQiymat = input.value
    let farenheit = (celsiusQiymat * 9/5) + 32;
    
    kirit.textContent = (farenheit).toFixed(1)


    if(farenheit > 50 && farenheit < 100){
        kirit.style.color = 'green'
    }
    else if(farenheit > 50 && farenheit < 20 ){
        kirit.style.color = 'yellow'
    }
    else if(farenheit > 100 && farenheit < 120){
        kirit.style.color = 'yellow'
    }
    else{
        kirit.style.color = 'red'
    }

})

harorat2.addEventListener('click', function(){
    let farenheitQiymat = input.value
    let celsius = (farenheitQiymat - 32) * 5/9;
    
    kirit.textContent = (celsius).toFixed(1)


    if(celsius > 15 && celsius < 30){
        kirit.style.color = 'green'
    }
    else if(celsius > 5 && celsius < 15 ){
        kirit.style.color = 'yellow'
    }
    else if(celsius > 30 && celsius < 40){
        kirit.style.color = 'yellow'
    }
    else{
        kirit.style.color = 'red'
    }

})

    ogirlik1.addEventListener('click', function(){
    let kilogram = input.value;
    let pound = kilogram * 2.20463;

    kirit.textContent = (pound).toFixed(1)


    if(pound > 0 && pound < 25){
        kirit.style.color = 'green'
    }
    else if (pound > 25 && pound < 40){
        kirit.style.color = 'yellow'
    }
    else{
        kirit.style.color = 'red'
    }
})
    ogirlik2.addEventListener('click', function(){
    let pound = input.value;
    let kilogram = pound / 2.20463;


    kirit.textContent = (kilogram).toFixed(1)


    if(kilogram > 0 && kilogram < 15){
        kirit.style.color = 'green'
    }
    else if (kilogram > 15 && kilogram < 40){
        kirit.style.color = 'yellow'
    }
    else{
        kirit.style.color = 'red'
    }
})

// masofa
masofa1.addEventListener('click', function(){
    let kilometr = input.value;
    let mil = kilometr * 0.621371;


    kirit.textContent = (mil).toFixed(1)


    if(mil > 0 && 5){
        kirit.style.color =  'green'
    }
    else if(mil > 5 && mil < 10){
        kirit.style.color =  'yellow'
    }
    else{
        kirit.style.color =  'red'
    }
    
})
masofa2.addEventListener('click', function(){
    let mil = input.value;
    let kilometr = mil / 0.621371;


    kirit.textContent = (kilometr).toFixed(1)
    
})