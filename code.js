let input=document.getElementById("inputbox");
let displays=document.getElementById("inner_lines");
let button=document.getElementById("btn");
// let para=document.querySelector('p')

let box=[];
window.onload=()=>{
    box=JSON.parse(localStorage.getItem('Array')) || []
    box.forEach(element => {
        todo(element)
    });
   
}

button.addEventListener('click',()=>{
    box.push(input.value);
    localStorage.setItem('Array',JSON.stringify(box))
   todo(input.value)
   input.value="";
})

function todo(val){
   
        let ptag=document.createElement('p')
        ptag.innerText=val;
        displays.appendChild(ptag)
        ptag.addEventListener('click',()=>{
            ptag.style.textDecoration = 'line-through'
            remove(ptag)
        })
        ptag.addEventListener('dblclick',()=>{
            displays.removeChild(ptag)
            remove(ptag)
        })
    // console.log(box)
}

function remove(tag){
    let index=box.indexOf(tag);
    if(index>-1){
        box.splice(index,1)
    }
    console.log(box)
    localStorage.setItem('Array',JSON.stringify(box))
}
