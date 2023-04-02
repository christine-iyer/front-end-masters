// ### Repetition
//use a for loop
for(let i = 0;i<10;i++) {
     console.log(i)
}
function calculate(a, b) {
     const add = a + b;
     const subtract = a - b;
     const multiply = a * b;
     const divide = (a / b).toFixed(2);
     const average = (add/2)
   
     return [add, subtract, multiply, divide,average];
   }
   
   const [add, subtract, multiply, divide,average] = calculate(10, 19);
   
   if (authenticated) {
     renderApp();
   } else {
     renderLogin();
   }
   authenticated ? renderApp() : renderLogin();
   