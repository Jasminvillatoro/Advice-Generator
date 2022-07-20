const adviceId = document.getElementById('advice-id');
const adviceText = document.querySelector('.advice-text');
console.log(adviceId);
console.log(adviceText);

const displayAdvice = (data) => {
  adviceText.innerHTML = data.slip.advice;
  adviceId.innerHTML = data.slip.id;
};

fetch('https://api.adviceslip.com/advice')
  .then((response) => response.json())
  .then(displayAdvice);
