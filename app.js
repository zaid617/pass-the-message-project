let messages = [];

document.getElementById('btn').addEventListener("click",()=>{
  let num = 1;
  let message = document.getElementById('text').value;
  messages.push(message)
  localStorage.setItem(`message${num}`, JSON.stringify(messages))
  num++;

  document.getElementById('Message').innerText = message;

})