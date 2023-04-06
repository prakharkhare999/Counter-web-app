 const countvalue=document.querySelector('#counter');
  const increment = ()=>{
//parse int for convert string to int
let value=  parseInt(countvalue.innerText);
value=value+1;
countvalue.innerText=value;
  } ;
  const decrement = ()=>{
    let value=parseInt(countvalue.innerText);
    value=value-1;
    countvalue.innerText=value;
  } ;