const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const scorebox = document.querySelector('.scorebox');
const scoreDisplay = document.getElementById('span');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score=0;
  const answers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

  answers.forEach((answer,index) => {
    if(answer===correctAnswers[index]){
        score += 25 ;
    }
  })
  scrollTo(0,0);
  scorebox.style.display = 'block';
  //scoreDisplay.textContent = `${score}%`;
  
  //Animation
  let output = 0
  const timer = setInterval(()=>{
    scoreDisplay.textContent = `${output}%`;
      if(output===score){
        clearInterval(timer);
      }
      else{
        output++ ;
      }
  },10);
});
