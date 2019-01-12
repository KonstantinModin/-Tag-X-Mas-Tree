'use strict'

var colors = ['red', 'blue', 'greenyellow', 'rgb(248, 248, 76)', 'rgb(255, 2, 247)'];

var asp = document.getElementsByClassName('a'),
    bsp = document.getElementsByClassName('b'),
    csp = document.getElementsByClassName('c'),
    dsp = document.getElementsByClassName('d'),
    esp = document.getElementsByClassName('e');
setInterval(step, 100);

function step() {
    let str = colors.shift();
    colors.push(str);
    draw();

    function draw() {
        for (var i = 0; i < asp.length; i++) {
            asp[i].style.color = colors[0];
        }
        for (var i = 0; i < bsp.length; i++) {
            bsp[i].style.color = colors[1];
        }
        for (var i = 0; i < csp.length; i++) {
            csp[i].style.color = colors[2];
        }

        for (var i = 0; i < dsp.length; i++) {
            dsp[i].style.color = colors[3];
        }

        for (var i = 0; i < esp.length; i++) {
            esp[i].style.color = colors[4];
        }
    }
}

let checkbox = document.querySelector('.checkbox'),
    body = document.body;
checkbox.addEventListener('click', think);

function think() {
    if (checkbox.checked) {
        doNight();
    } else {
        doDay();
    }
}

function doNight() {
    body.style.background = 'black';
}

function doDay() {
    body.style.background = 'white';
}

// Timer
function setClock() {
    let title = document.getElementById('title'),
        timeInterval = setInterval(updateClock, 300);

    function updateClock() {
        let d = new Date(),
            year = d.getFullYear(),
            newYear = new Date(year, 11, 31, 23, 59, 59),
            gap = newYear - Date.parse(new Date()),
            seconds = Math.floor((gap / 1000) % 60),
            minutes = Math.floor((gap / 1000 / 60) % 60),
            hours = Math.floor(gap / 1000 / 60 / 60);

        // console.log(gap);
       
        function addZero(number) {
            if (number > 9) {
            return number;
            } else {
            return '0' + number;
            }
        }

        hours = addZero(hours);
        minutes = addZero(minutes);
        seconds = addZero(seconds);

        if (gap >= 2592000000) {
           clearInterval(timeInterval);
           let ss = new Date(),
                z = ss.getFullYear();
           title.innerHTML = '<p>' + 'Happy Web New Year ' + z + '!!!' + '</p>';
        } else {
            title.innerHTML = '<p>'+`${hours}h ${minutes}min ${seconds}sec`+'<br>'+`to New Year!!!`+'</p>'; 
        }
    }
}
setClock();