var X=0;
var Y=0;
var niz = [8]; 
var click = 1;

function start(){
for(var i=0;i<26;i++)
{
    document.getElementsByTagName("line")[i].setAttribute("visibility", "hidden");
}
for(var j=0;j<9;j++)
{
    document.getElementsByTagName("circle")[j].setAttribute("visibility", "hidden");
}
for(var k=0;k<9;k++)
{
    niz[k]=0;
}
document.getElementById("x").innerHTML = X; 
document.getElementById("y").innerHTML = Y; 
}
for(var j=0;j<9;j++)
{
    niz[j]=0;
}

function makevisibleX(k){
    if(niz[k] === 0 && niz[k] !== 2  && click%2 !==0)
    {
    document.getElementsByTagName("line")[2*k+1].setAttribute("visibility", "visible");
    document.getElementsByTagName("line")[2*k].setAttribute("visibility", "visible"); 
    niz[k] = 1;
    click++;
    checkwin(1);
    }
    else if(niz[k] === 0 && niz[k] !== 1 && click%2 !==1)
     {
    document.getElementsByTagName("circle")[k].setAttribute("visibility", "visible");
    niz[k] = 2;
    click++;
    checkwin(2);
     }
     else
     alert("Polje je popunjeno") ;   
}
function a11(){
makevisibleX(0);
}
function a12(){
makevisibleX(1);
}
function a13(){
makevisibleX(2);
}
function a21(){
makevisibleX(3);
}
function a22(){
makevisibleX(4);
}
function a23(){
makevisibleX(5);
}
function a31(){
makevisibleX(6);
}
function a32(){
makevisibleX(7);
}
function a33(){
makevisibleX(8);
}
function checkwin(x)
{
switch (true) {
    case (niz[0]==niz[1] && niz[1]==niz[2] && niz[0]==x):
        document.getElementsByTagName("line")[18].setAttribute("visibility", "visible");
        if(x===1){X+=1}
        else{Y+=1}
        alert("pobeda"+X +":" +Y);
        start();
        break;
    case (niz[3]==niz[4] && niz[4]==niz[5] && niz[3]==x):
        document.getElementsByTagName("line")[19].setAttribute("visibility", "visible");
        if(x===1){X+=1}
        else{Y+=1}
        alert("pobeda"+X +":" +Y);
        start();
        break;
    case (niz[6]==niz[7] && niz[7]==niz[8] && niz[6]==x):
        document.getElementsByTagName("line")[20].setAttribute("visibility", "visible");
        alert("pobeda"+X +Y);
        if(x===1){X+=1}
        else{Y+=1}
        alert("pobeda"+X +":" +Y);
        start();
        break;
    case (niz[0]==niz[3] && niz[3]==niz[6] && niz[0]==x):
        document.getElementsByTagName("line")[21].setAttribute("visibility", "visible");
        alert("pobeda"+X +Y);
        if(x===1){X+=1}
        else{Y+=1}
        alert("pobeda"+X +":" +Y); 
        start();
        break;
    case (niz[1]==niz[4] && niz[4]==niz[7] && niz[1]==x):
        document.getElementsByTagName("line")[22].setAttribute("visibility", "visible");
        if(x===1){X+=1}
        else{Y+=1}
        alert("pobeda"+X +":" +Y);
        start();
        break;
    case (niz[2]==niz[5] && niz[5]==niz[8] && niz[2]==x):
        document.getElementsByTagName("line")[23].setAttribute("visibility", "visible");
        if(x===1){X+=1}
        else{Y+=1}
        alert("pobeda"+X +":" +Y);
        start();
        break;
    case (niz[0]==niz[4] && niz[4]==niz[8] && niz[0]==x):
        document.getElementsByTagName("line")[24].setAttribute("visibility", "visible");
        if(x===1){X+=1}
        else{Y+=1}
        alert("pobeda"+X +":" +Y);
        start();
        break;
    case (niz[2]==niz[4] && niz[4]==niz[6] && niz[2]==x):
        document.getElementsByTagName("line")[25].setAttribute("visibility", "visible");
        if(x===1){X+=1}
        else{Y+=1}
        alert("pobeda"+X +":" +Y);
        start();
        break;
    default:
        text = "Sta";
        break;
}
}
