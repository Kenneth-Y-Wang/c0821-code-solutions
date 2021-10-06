let count = 3;
let intervalId = null;

const countDown = () => {

  console.log(count);
  count--;

  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalId);
  }
};

intervalId = setInterval(countDown, 1000)
;
