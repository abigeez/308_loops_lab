
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
///////////////////////////
//prime time question
let n=22;
while (n < 30) {
    n++;

    if(n % 2 && n % 5 !==0) {
       if (n % 3 !==0)
    console.log(n); 
    continue; }
    
    // break;
    

}


////// testing with larger numbers

// for(g = 85;g < 90;g++) {


//     if(g % 2 || 3 !==0)
        
//        console.log(g);
   
// }
// console.log(g);
// if (g % 3 === 0) {
//     console.log(g);
// }
   
//     if (g % 5 === 0) {
//         console.log(g);
        
//     }

