let count = 3;
let intervalId = null;

const countDown = () => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalId);
  } else {

    console.log(count);
  }
  count--;

};

intervalId = setInterval(countDown, 1000)
;
