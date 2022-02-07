// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
  getInstruction("mashedPotatoes", 1, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 2, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 3, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          getInstruction("mashedPotatoes", 4, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready</li>`;
          }, (error) => console.log(error))
        }, (error) => console.log(error))
      }, (error) => console.log(error))
    }, (error) => console.log(error))
  , (error) => console.log(error)
})

// Iteration 2 - using promises
/*
obtainInstruction('steak', 0)
.then((step1) => {
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
})
.then(obtainInstruction('steak', 1)
.then((step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`}))
.then(obtainInstruction('steak', 2)
.then((step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
}))
.then(obtainInstruction('steak', 3)
.then((step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`}))
.then(obtainInstruction('steak', 4)
.then((step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`}))
.then(obtainInstruction('steak', 5)
.then((step6) => {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`}))
.then(obtainInstruction('steak', 6)
.then((step7) => {
  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`}))
.then(obtainInstruction('steak', 7)
.then((step8) => {
  document.querySelector("#steak").innerHTML += `<li>${step8}</li>`}))
*/

obtainInstruction('steak', 0)
.then((step1) => {
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
}, (error) => console.log(error))
.then(() => obtainInstruction('steak', 1))
.then((step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
}, (error) => console.log(error))
.then(() => obtainInstruction('steak', 2))
.then((step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`}
  , (error) => console.log(error))
.then(() => obtainInstruction('steak', 3))
.then((step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`}
  , (error) => console.log(error))
.then(() => obtainInstruction('steak', 4))
.then((step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`}
  , (error) => console.log(error))
  .then(() => obtainInstruction('steak', 5))
.then((step6) => {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`}
  , (error) => console.log(error))
  .then(() => obtainInstruction('steak', 6))
.then((step7) => {
  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`}
  , (error) => console.log(error))
  .then(() => obtainInstruction('steak', 7))
.then((step8) => {
  document.querySelector("#steak").innerHTML += `<li>${step8}</li>`}
  , (error) => console.log(error))
.then((enjoy) => {
  document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
})
.then(()=> document.querySelector("#steakImg").removeAttribute("hidden"))

// Iteration 3 using async/await

async function makeBroccoli(){
  for (let i = 0; i < broccoli.length; i++){
    await obtainInstruction('broccoli', i)
    .then((step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`}
      , (error) => console.log(error));
  }
}

makeBroccoli().then(() => {
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`})
  .then(() => {document.querySelector("#broccoliImg").removeAttribute("hidden")})

// Bonus 2 - Promise all

Promise.all(brusselsSprouts)
.then(brusselsSprouts.forEach(step => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
}))
.then(()=> document.querySelector("#brusselsSproutsImg").removeAttribute("hidden"))
  
  //(step) => {document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`})