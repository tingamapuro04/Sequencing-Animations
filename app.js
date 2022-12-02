const temo = new Promise(function(resolve, reject) {
  const time1 = 20;
  const time2 = 21;

  if (time1 === 25) {
    resolve()
  } else {
    reject()
  }
});

temo
  .then(() => console.log('Our promise is fulfilled'))
  .catch(() => console.log('Our promise has failed!'))
