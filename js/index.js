'use strict';
 let numClicksOne = 0;
 let numClicksThree = 0;
 let numClicksSix = 0;
 let numClicksTwelve = 0;
 let numItemsAdded = 0;

 let sizeSelectedOne = false;
 let sizeSelectedThree = false;
 let sizeSelectedSix = false;
 let sizeSelectedTwelve = false;


 let one = document.getElementById('one');
 console.log(one);
 one.addEventListener('click', function(){
     console.log('clicking');
     numClicksOne ++;
     console.log(one.style.backgroundColor);
     if(numClicksOne % 2 === 1 && sizeSelectedThree === false && sizeSelectedSix === false && sizeSelectedTwelve === false) {
        one.style.backgroundColor = '#CFCFCF';
        sizeSelectedOne = true;
     }
     else {
         one.style.backgroundColor = '#EFC65B';
         sizeSelectedOne = false;
     }
 });

 let three = document.getElementById("three");
 console.log(three);
 three.addEventListener('click', function(){
    console.log('clicking');
    numClicksThree ++;
    if(numClicksThree % 2 === 1  && sizeSelectedOne === false && sizeSelectedSix === false && sizeSelectedTwelve === false) {
        three.style.backgroundColor = '#CFCFCF';
        sizeSelectedThree = true;
    }
    else {
        three.style.backgroundColor = '#EFC65B';
        sizeSelectedThree = false;
    }

 });

 let six = document.getElementById("six");
 console.log(six);
 six.addEventListener('click', function(){
    console.log('clicking');
    numClicksSix ++;
    if(numClicksSix % 2 === 1  && sizeSelectedThree === false && sizeSelectedOne === false && sizeSelectedTwelve === false) {
        six.style.backgroundColor = '#CFCFCF';
        sizeSelectedSix = true;
    }
    else {
        six.style.backgroundColor = '#EFC65B';
        sizeSelectedSix = false;
    }
 });

 let twelve = document.getElementById("twelve");
 console.log(twelve);
 twelve.addEventListener('click', function(){
    console.log('clicking');
    numClicksTwelve ++;
    if(numClicksTwelve % 2 === 1  && sizeSelectedThree === false && sizeSelectedSix === false && sizeSelectedOne === false) {
        twelve.style.backgroundColor = '#CFCFCF';
        sizeSelectedTwelve = true;
    }
    else {
        twelve.style.backgroundColor = '#EFC65B';
        sizeSelectedTwelve = false;
    }
 });

// TEMP SOLUTION
//  let addToCart = document.getElementById("addToCart");
//  let cartFeedback = document.getElementById('cartFeedback');
//  cartFeedback.style.display = "none";

//  addToCart.addEventListener('click', function() {
//     numItemsAdded ++;
//     cartFeedback.textContent = "Cart: " + numItemsAdded;
    
//     cartFeedback.style.display = "block";
//  });