"use strict";

let numbers = [1,2,3,4,5];

[ 'dice', 'dice1', 'dice2', 'dice3', 'dice4' ].forEach(function( ids ) {

    document.getElementById( ids ).style.cssText = "border: 1px solid #000; display: inline-block; padding: 20px;"

});

document.getElementById('dice').innerHTML = numbers [0];

document.getElementById('dice1').innerHTML = numbers [1];

document.getElementById('dice2').innerHTML = numbers [2];

document.getElementById('dice3').innerHTML = numbers [3];

document.getElementById('dice4').innerHTML = numbers [4];


