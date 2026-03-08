//EventLoops

let btn=document.querySelector.Selection("#btn1");
btn1.onclick=(() => {
   console.log("btn1 was click");
   let a=25;
   console.log(a);//26
});

//map Array mrthods

let num=[76,88,23];
let newArr=num.map((val)=>{
return val*2;
});
console.log(newArr);

//forEvent Loops in Array

let arr=[1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val);
});

let mus=[87,33,38];
num.forEach((num)=>{
    console.log(num*num);//num**2
});


//arrow function

function countVowels(str){
    for(let char of str){
        console.log(char);
    }
}