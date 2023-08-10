const form = document.querySelector('.form');
form.addEventListener('submit', onButtonClick);



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
function onButtonClick(evt) {
  evt.preventDefault();
  let delay = Number(evt.target.elements.delay.value);
  const step = Number(evt.target.elements.step.value);
  const amount = Number(evt.target.elements.amount.value);

  if (step <= 0 || delay <= 0 || amount <= 0) {

    alert("Please provide valid values for step, delay, and amount.");
    return; 
  }

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        console.log(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}

