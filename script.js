const container=document.querySelector('.container')


const screen=document.querySelector('#screen')
container.appendChild(screen);
let calcarray=[0,1,2,3,4,5,6,7,8,9,'*','-','/','=','+','clear'];  
for(let i=0;i<calcarray.length;i++)  
{let numsbut=document.createElement('button')
numsbut.innerText=calcarray[i];
numsbut.classList.add('buttons')
container.appendChild(numsbut);
//container.appendChild(screen);
numsbut.addEventListener('click',()=>{
   

if(calcarray[i]==="=")
{screen.innerText=eval(screen.innerText)}
else if(calcarray[i]==='clear'){screen.innerText="0"}
else if(screen.innerText==='0'){screen.innerText=calcarray[i]}

else{screen.innerText+=calcarray[i]}})



}
