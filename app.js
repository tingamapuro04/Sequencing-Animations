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
  .catch((error) => console.log(`Our promise has failed!: ${error}`))


const img_1 = document.querySelector('#img_1')
const img_2 = document.querySelector('#img_2')
const img_3 = document.querySelector('#img_3')

const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

img_1.animate(aliceTumbling, aliceTiming)

const promise = new Promise((resolve, reject) => {
  
})
