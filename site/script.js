function onClick(){
    c = parseInt(document.getElementById('cnt').innerHTML);
    crs = parseInt(document.getElementById('crs_num').innerHTML);
    std = parseInt(document.getElementById('std_num').innerHTML);
    cdr = parseInt(document.getElementById('cdr_num').innerHTML);
    clk = parseInt(document.getElementById('clk_num').innerHTML);
    c = c + 1 + 2*crs + 10*std + 100*cdr + 1000*clk;
    document.getElementById('cnt').innerHTML = c;
    if(c>=1000000){
        /*alert("NOT BAD, MAN! NOT BAD! AGAIN!");
        document.getElementById('cnt').innerHTML = 0;
        document.getElementById('crs_num').innerHTML = 0;
        document.getElementById('std_num').innerHTML = 0;
        document.getElementById('cdr_num').innerHTML = 0;*/
        window.location= "location.html";
    }
}

function buyCrs(){
    tmp = document.getElementById('crs_num').innerHTML;
    c = document.getElementById('cnt').innerHTML;
    if(c>=10){
        tmp++;
        document.getElementById('crs_num').innerHTML = tmp;
        c-=10;
        document.getElementById('cnt').innerHTML = c;
    }
}

function buyStd(){
    tmp = document.getElementById('std_num').innerHTML;
    c = document.getElementById('cnt').innerHTML;
    if(c>=100){
        tmp++;
        document.getElementById('std_num').innerHTML = tmp;
        c-=100;
        document.getElementById('cnt').innerHTML = c;
    }
}

function buyCdr(){
    tmp = document.getElementById('cdr_num').innerHTML;
    c = document.getElementById('cnt').innerHTML;
    if(c>=1000){
        tmp++;
        document.getElementById('cdr_num').innerHTML = tmp;
        c-=1000;
        document.getElementById('cnt').innerHTML = c;
    }
}

function buyClk(){
    tmp = document.getElementById('clk_num').innerHTML;
    c = document.getElementById('cnt').innerHTML;
    if(c>=10000){
        tmp++;
        document.getElementById('clk_num').innerHTML = tmp;
        c-=10000;
        document.getElementById('cnt').innerHTML = c;
    }
}

function init()
{
    sec = 0;
    setInterval(tick, 1000);
}
            
function tick()
{
    sec++;
    document.getElementById("timer").childNodes[0].nodeValue = sec + " seconds";
}
