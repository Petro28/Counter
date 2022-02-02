//----------Object Oriented Paradigm---------------
const button = document.querySelectorAll('.button')
const display = document.querySelector('.display')

class Counter {
  constructor(display) {
    this.display = display
  }

  decrease() {
    this.display--
  }

  increase() {
    this.display++
  }

  restart() {
    this.display = 0
  }

  updateDisplay() {
    display.innerText = this.display
  }
}

const counter = new Counter(0)

button.forEach(button => {
  button.addEventListener('click', (e) => {
    const style = e.currentTarget.classList
    if(style.contains('decrease')) {
      counter.decrease()
      counter.updateDisplay()
    } else if(style.contains('increase')) {
      counter.increase()
      counter.updateDisplay()
    } else {
      counter.restart()
      counter.updateDisplay()
     }

    if(counter.display > 0) {
      display.id = 'green'
      } else if (counter.display < 0) {
          display.id = 'red'
      } else {
          display.id = 'blank'
      }
  })
});



//----------------------Imperative--------------------
// const button = document.querySelectorAll('.button')
// const display = document.querySelector('.display')
// let count = 0;

// button.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const style = e.currentTarget.classList
//     if(style.contains('decrease')) {
//       count--
//     } else if(style.contains('increase')) {
//       count++
//     } else {
//       count = 0
//     }

//     if(count > 0) {
//       display.id = 'green'
//     } else if (count < 0) {
//       display.id = 'red'
//     } else {
//       display.id = 'blank'
//     }

//     display.innerText = count
//   })
// })



//---------Imperative with closure self invoked functions--------


// const decrease = document.querySelector('.decrease')
// const reset = document.querySelector('.reset')
// const increase = document.querySelector('.increase')
// const display = document.querySelector('.display')

// let counter = 0

// const decreaseFunc = (() => {
//   return () => {
//     counter--
//     return display.innerText = counter
//   }
// })();

// const increaseFunc = (() => {
//   return () => {
//     counter++
//     return display.innerText = counter
//   }
// })();

// decrease.addEventListener('click', e => {
//   display.innerText = decreaseFunc()
//   if (counter < 0) {
//   display.id = 'red'
// } else if (counter === 0) {
//   display.id = 'blank'
// }
// })

// reset.addEventListener('click', e => {
//   counter = 0
//   display.innerText = counter
//   display.id = 'blank'
// })

// increase.addEventListener('click', e => {
//   display.innerText = increaseFunc()
//   if (counter > 0) {
//     display.id = 'green'
//   } else if (counter === 0) {
//     display.id = 'blank'
//   }
// })

