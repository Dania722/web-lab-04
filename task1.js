//-----------------------Task 1 

//program for a simple calculator

// //take the operator input
const op = prompt('Enter operator ( either +, -, /,* , ++ , -- , % ): ');

// // take the operand input
 const number1 = parseFloat(prompt('Enter first number: '));
 const number2 = parseFloat(prompt('Enter second number: '));
let result;

switch(op){
  case "+":
    console.log("You have chosen " + op + "therefore the result is : " )
    result = number1 + number2;
    console.log(`${number1} ${op} ${number2} = ${result}`);
    break ;
    case "-":
      console.log("You have chosen " + op + "therefore the result is : " )
        result = number1 - number2;
        console.log(`${number1} ${op} ${number2} = ${result}`);
        break ;
    case "*":
      console.log("You have chosen " + op + "therefore the result is : " )
       result = number1 * number2;
       console.log(`${number1} ${op} ${number2} = ${result}`);
       break ;
    case "/":
      console.log("You have chosen " + op + "therefore the result is : " )
      result = number1 / number2;
      console.log(`${number1} ${op} ${number2} = ${result}`);
      break ;
    case "++":
          console.log("You have chosen " + op + "therefore the result is : " )
          result= number1+number2+1;
          console.log(`${number1} ${op} ${number2} = ${result}`);
          break ;
    case "--":
      console.log("You have chosen " + op + "therefore the result is : " )
     result= number1-number2+1;
 console.log(`${number1} ${op} ${number2} = ${result}`);
 break ;
    case "%":
      console.log("You have chosen " + op + "therefore the result is : " )
      result= number1/number2*100;
     console.log(`${number1} ${'/'} ${number2} ${'*'} ${100} = ${result} ${op} `);
     break ;
     default:
       alert("wrong input of operator by user ");
}




