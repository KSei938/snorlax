'use strict';

const btn = document.getElementById('btn_id');

btn.addEventListener('click', function(){

  const weight = document.getElementById('kg').value;

  if(weight === 0 || weight === "") {

    alert('体重を入力してください');


  } else if(isNaN(weight) === true) {

    alert('体重は数値を入力してください'); 
  } else {
    
    const weight_compaer = 460 / weight;

    document.getElementById('result').value+= weight_compaer;
  }
})
