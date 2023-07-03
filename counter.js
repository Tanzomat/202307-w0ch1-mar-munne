let counterNumber = 0;
const maxCounterNumber = 100;

let counterNumberDisplayElement = document.querySelector('.counterNumber');
let counterResetElement = document.querySelector('.counterResetElement');
let counterDecreaseElement = document.querySelector('.counterDecreaseElement');
let counterIncreaseElement = document.querySelector('.counterIncreaseElement');

counterIncreaseElement.addEventListener("click", () => {
  if (counterNumber < maxCounterNumber) {
  counterNumber++;
  counterNumberDisplayElement.textContent = counterNumber;
  } else { 
    counterNumber = maxCounterNumber;
  }
});

counterDecreaseElement.addEventListener("click", () => {
  if (counterNumber > 0) {
  counterNumber--;
  counterNumberDisplayElement.textContent = counterNumber;
  } else {
    counterNumber = 0;
  }
});

counterResetElement.addEventListener("click", () => {
  counterNumber = 0;
  counterNumberDisplayElement.textContent = counterNumber;
});