
//fizz buzz problem

let fb1 = 1;
let f1 = "fizz";
let b1 = "buzz";
let fb2 = "Fizz Buzz";
while (fb1 < 100) {

 fb1++;   

 if (fb1 % 3 == 0) {
    console.log(f1); 
 }

  if(fb1 % 5 == 0) {
    console.log(b1);
}
 if( fb1 % 5 === 0 || 3 === 0) {
 console.log(fb2) }

if (fb1 % 3 || 5 !==0) {
    console.log(fb1)
}
}
