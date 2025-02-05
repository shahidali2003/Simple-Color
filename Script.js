// var str = "Hello Mani Mera Bhai";
// var val =str.split(" ")

// sum ='';
// val.forEach(function(e){
//  sum += e.at(2)
// });

// console.log(sum); 

// Is code ke help se ham string ko array me convert kar sakte hi and useke kisi bhi indexes ko 
// ham Print kara sakte hai 












var box = document.querySelector(".box");
var main = document.querySelector(".main");
var btn = document.querySelector("button");
let flap = false;
let colors = [];
let a, b, c;

// Remove color on box click
box.addEventListener("click", function(details){
  box.removeChild(details.target);
  colors.splice(colors.indexOf(details.target.style.backgroundColor), 1); // Remove color from colors array
  flap = true; // Reset flap after removing

});

// Add color on main click
main.addEventListener("click", function () {
    if (flap && colors.indexOf(`rgb(${a}, ${b}, ${c})`) === -1) {
        const div = document.createElement("div");
        div.classList.add("pair");
        div.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
        box.appendChild(div);
        colors.push(`rgb(${a}, ${b}, ${c})`); // Push new color to colors array
        flap = false; // Reset flap after adding
    }
});

// Generate random color on button click
btn.addEventListener("click", function () {
    a = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    c = Math.floor(Math.random() * 256);

    var genrate = `rgb(${a}, ${b}, ${c})`;
    main.style.backgroundColor = genrate;
    console.log(genrate);
    flap = true;
});








