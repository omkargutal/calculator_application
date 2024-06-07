
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})


// btnEl.addEventListener('click', async function () {
//   try {
//     btnEl.disabled = true;
//     const response = await fetch('input');
//     const data = await response.json();
//     btnEl.disabled = false;
//     btnEl.innerText = 'string';
//   }
//   catch (error) {
//     console.log(error);
// }
// });