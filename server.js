let input=document.querySelector("#inp");
let btn=document.querySelector('#btn');
let cont=document.getElementsByClassName('container');
let taging=document.getElementById('h2');

btn.addEventListener("click",()=>{
    let bottom=document.getElementById('bottom');

   let ele=document.createElement('div');
   ele.className='tasks';
   ele.innerText=input.value;
   
   ele.addEventListener('click',()=>{
       ele.classList.toggle('scratch');
    })

   let del=document.createElement('button');
   del.innerHTML=`<svg fill="#ffffff" height="20px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="5"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg>`;
   del.className='delete';
   
    del.addEventListener('click',()=>
    {
        bottom.removeChild(ele);
    })
    
    ele.appendChild(del);
    bottom.appendChild(ele); 
})

input.addEventListener('mouseenter',()=>
{
    if(input.value==='Enter the task')
    {
        input.value='';
    }
})


