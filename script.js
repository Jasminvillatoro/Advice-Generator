const adviceId = document.getElementById('advice-id');
const adviceText = document.querySelector('.advice-text');
const button = document.querySelector('.button');

const displayAdvice = (data) => {
  adviceText.innerHTML = `"${data.slip.advice}"`;
  adviceId.innerHTML = 'Advice # ' + data.slip.id;
};

const getAdvice = () => {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then(displayAdvice);
};

button.addEventListener('click', getAdvice);
window.onload = () => {
  getAdvice();
};
