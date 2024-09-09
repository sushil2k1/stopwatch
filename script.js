let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let lapbtn = document.getElementById('lap');
lapbtn.addEventListener('click', lapp);
let timer = false;
let minute = document.getElementById("min");
let second = document.getElementById("sec");
let hour = document.getElementById("hour")
let ms = document.getElementById("m-sec");
let lap = document.getElementById('lap');
let bottom = document.getElementById('bottom');
var interval;
// Taking buttons
let s = document.getElementById("start");
let r = document.getElementById("reset");
let l = document.getElementById("lap");
let p = document.getElementById("stop");


function start() {
    if (timer == false) {
        timer = true;
        stopwatch();
        s.style.display = "none";
        r.style.display = "none";
        p.style.display = "block";
        l.style.display = "block";

    }

}


function stop() {
    timer = false;
    stopwatch();
    clearInterval(interval)
    p.style.display = "none";
    l.style.display = "none";
    s.style.display = "block";
    r.style.display = "block";

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    // minute.innerHTML="00";
    // hour.innerHTML="00";
    // second.innerHTML="00";
    // ms.innerHTML="00";


}


function reset() {
    clearInterval(interval)
    bottom.innerHTML = "";
    minute.innerHTML="00";
    hour.innerHTML="00";
    second.innerHTML="00";
    ms.innerHTML="00";



}

function stopwatch() {
    if (timer == true) {
        interval = setInterval(() => {
            count++;
            if(count<10){
                ms.innerHTML = "0"+count;

            }
            else
            ms.innerHTML = count;
            if (count == 100) {
                count = 0;
                sec++;
                if(sec<10){
                    second.innerHTML="0"+sec;
                }
                else
                second.innerHTML = sec;
                if (sec == 60) {
                    sec = 0;
                    min++;
                    minute.innerHTML = min;
                    if (minute == 60) {
                        min = 0;
                        hr++;
                        hour.innerHTML = hr;
                    }
                }

            }
        }, 10);
        // setTimeout("stopwatch()",10);
    }

}

function lapp() {
    let list = document.createElement('li');
    let s1 = document.createElement('span').innerHTML = hr;
    let s2 = document.createElement('span').innerHTML = ":";
    let s3 = document.createElement('span').innerHTML = min;

    let s4 = document.createElement('span').innerHTML = ":";
    let s5 = document.createElement('span').innerHTML = sec;
    let s6 = document.createElement('span').innerHTML = ":";
    let s7 = document.createElement('span');
    console.log(count)
    s7.innerText = String(count);

    // apendind elements
    list.append(s1);
    list.append(s2);
    list.append(s3);
    list.append(s4);
    list.append(s5);
    list.append(s6);
    list.append(s7);

    console.log(list)
    bottom.appendChild(list);
}