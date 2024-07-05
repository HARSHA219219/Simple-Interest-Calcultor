let but=document.getElementById("button");
let but1=document.getElementById("button1");
let pop1=document.getElementById("ppo1");
let pop2=document.getElementById("ppo2");
let pop3=document.getElementById("ppo3");
let pop4=document.getElementById("ppo4");
let pop5=document.getElementById("ppo5");
let v1;
let v2;
but.onclick=function(){
    v1=document.getElementById("hlo").value;
    v1=Number(v1);
    ans();
}
but1.onclick=function(){
    v2=document.getElementById("oyy").value;
    v2=Number(v2);
    ans();
}
pop1.onclick=function(){
    symbol="+";
    ans();
}
pop2.onclick=function(){
    symbol="-";
    ans();
}
pop3.onclick=function(){
    symbol="*";
    ans();
}
pop4.onclick=function(){
    symbol="/";
    ans();
}
pop5.onclick=function(){
    symbol="**";
    ans();
}
function ans(){
    if (symbol==="+"){
        v=v1+v2;
        document.getElementById("s").textContent=`Answer : ${v}`;

    }
    if (symbol==="-"){
        v=v1-v2;
        document.getElementById("s").textContent=`Answer : ${v}`;
    }
    if (symbol==="*"){
        v=v1*v2;
        document.getElementById("s").textContent=`Answer : ${v}`;
    }
    if (symbol==="/"){
        v=v1/v2;
        document.getElementById("s").textContent=`Answer : ${v}`;
    }
    if (symbol==="**"){
        v=v1**v2;
        document.getElementById("s").textContent=`Answer : ${v}`;
    }
}




