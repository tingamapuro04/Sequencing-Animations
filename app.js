const img_1 = document.querySelector('#img_1')
const img_2 = document.querySelector('#img_2')
const img_3 = document.querySelector('#img_3')

const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 3000,
  iterations: 2,
  direction: "alternate-reverse",
  fill: "backwards",
};

const first = () => {
  return img_1.animate(aliceTumbling, aliceTiming).finished
} 
const second = () => {
  return img_2.animate(aliceTumbling, aliceTiming).finished
} 
const third = () => {
  return img_3.animate(aliceTumbling, aliceTiming).finished
} 

const handleanimation = async () => {
  try {
    await first()
    await second()
    await third()
  } catch (error) {
    console.log(error)
  }
};

handleanimation()

