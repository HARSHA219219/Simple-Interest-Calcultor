document.getElementById("s9").onclick=function(){
    amount=document.getElementById("s1").value;
    interest=document.getElementById("s2").value;
    d=document.getElementById("d").value;
    m=document.getElementById("m").value;
    y=document.getElementById("y").value;
    d1=document.getElementById("d1").value;
    m1=document.getElementById("m1").value;
    y1=document.getElementById("y1").value;
    if (y>0){
        if(y%4===0 && y%100===0 || y%400===0){
            console.log("it,s leap year");
            let lyc=[0,31,29,31,30,31,30,31,31,30,31,30,31];
            sum=0;
            s=[];
            for (i=m;i<13;i++){
                s.push(lyc[i]);
            }
            for (i=0;i<s.length;i++){
                sum=sum+s[i];
            }
            total=sum-Number(d);
        }
        else{
            console.log("it's not a leap year");
            lyc=[0,31,28,31,30,31,30,31,31,30,31,30,31];
            u=[];
            sum1=0;
            for (i=m;i<13;i++){
                u.push(lyc[i]);
            }
            for (i=0;i<u.length;i++){
                sum1=sum1+u[i];
            }
            total=sum1-Number(d);
        }
    }
    console.log(total);
    if (y1>0){
        if(y1%4===0 && y1%100===0 || y1%400===0){
            console.log("it,s leap year");
            let lyc=[0,31,29,31,30,31,30,31,31,30,31,30,31];
            sum=0;
            s=[];
            for (i=0;i<m1;i++){
                s.push(lyc[i]);
            }
            for (i=0;i<s.length;i++){
                sum=sum+s[i];
                sum=Number(sum);
            }
            total1=sum+Number(d1);
        }
        else{
            console.log("it's not a leap year");
            lyc=[0,31,28,31,30,31,30,31,31,30,31,30,31];
            u=[];
            sum1=0;
            for (i=0;i<m1;i++){
                u.push(lyc[i]);
            }
            for (i=0;i<u.length;i++){
                sum1=sum1+u[i];
                sum1=Number(sum1);
            }
            total1=Number(sum1)+Number(d1);
        }
    }
    console.log(total1);
    j=[];
    count=0;
    for (i=(Number(y)+1);i<Number(y1);i++){
        j.push(i)
        if (i%4===0 && i%100!==0 || i%400===0){
            count=count+1;
        }
    }
    console.log(j);
    console.log(count);
    days=(365*(j.length))+count+total+total1;
    console.log(days);
    in_terms_of_months=(days*12)/365;
    simple_interest=Math.round((in_terms_of_months*Number(amount)*Number(interest))/100,5);
    total_amount=simple_interest+Number(amount);
    console.log(Math.round(total_amount,5));
    document.getElementById("ans1").textContent=`Simple Interest - సాధారణ వడ్డీ మొత్తం: ${simple_interest}`;
    document.getElementById("ans2").textContent=`Total Amount Due - మొత్తం చెల్లింపు మొత్తం : ${total_amount} `;


}
document.getElementById("clear").onclick=function(){
    document.getElementById("s1").value="";
    document.getElementById("s2").value="";
    document.getElementById("d").value="";
    document.getElementById("m").value="";
    document.getElementById("y").value="";
    document.getElementById("d1").value="";
    document.getElementById("m1").value="";
    document.getElementById("y1").value="";
    document.getElementById("ans1").textContent=`Simple Interest - సాధారణ వడ్డీ మొత్తం:`;
    document.getElementById("ans2").textContent=`Total Amount Due - మొత్తం చెల్లింపు మొత్తం : `;
}