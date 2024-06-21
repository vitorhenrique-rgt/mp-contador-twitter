const textarea = document.getElementsByTagName('textarea')[0];
const circle = document.getElementById('circle')
const number = document.getElementById('number')

textarea.addEventListener('input', () => {
  // Redefine a altura do textarea conforme digitar
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
  updateCircle()
})

function calculateCircleOffset(){
  const charLength = textarea.value.length;
  const percentage = charLength / 280;
  return 76 - (76 * percentage);
}

function updateCircle(){
  
  if (textarea.value.length < 260) {
    circle.style.strokeDashoffset = calculateCircleOffset()
    circle.style.stroke ='#1f9bf0'
    number.textContent = ""
  
  }else if (textarea.value.length < 280) {
    circle.style.strokeDashoffset = calculateCircleOffset()
    circle.style.stroke ='#f3ef08'
    number.textContent = 280 - textarea.value.length
  
  } else if(textarea.value.length == 280){
    circle.style.strokeDashoffset = 0 
    circle.style.stroke ='#ff0000'
    number.textContent = 280-textarea.value.length
  
  }else{
    circle.style.strokeDashoffset = 76
    number.textContent = 280-textarea.value.length
  }
}