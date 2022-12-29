// //your code here
// let display = document.getElementById("input")

// let buttons = Array.from(document.getElementsByClassName("button"))

// buttons.map((button) => {
//   button.addEventListener("click", (e) => {
//     switch (e.target.innerText) {
//       case "C":
//         display.innerText = ""
//         break
//       case "=":
//         try {
//           display.innerText = eval(display.innerText)
//         } catch {
//           display.innerText = "404"
//         }
//         break
//       default:
//         display.innerText += e.target.innerText
//     }
//   })
// })

let input = document.getElementById("input")
let expression = ""
function solve(e) {
  // console.log(e)
  if (e === "ans") {
    // evaluate the expression
    let result = eval(expression)
    console.log(result)
    input.value = result
  } else if (e === "clear") {
    expression = ""
    input.value = ""
  } else {
    expression += e
    console.log(expression)
    input.value = expression
  }
}
