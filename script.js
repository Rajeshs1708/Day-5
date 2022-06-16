
// a.Print odd numbers in an array
 
//anonymous function

let odd=[1,2,3,4,5,6,7,8,9,10]
let oddNo=[]
function oddNumber(a){
    for(let i=0;i<a.length;i++){
if(a[i]%2==0){
    console.log();
}else{
    oddNo.push(a[i]);
     }
  }
}
oddNumber(odd);
console.log(oddNo);


//Function Expression

let odd1=[1,2,3,4,5,6,7,8,9,10]
let oddNo1=[]
let oddNumber1=function (a){
    for(let i=0;i<a.length;i++){
if(a[i]%2==0){
    console.log();
}else{
    oddNo1.push(a[i]);
     }
  }
}
oddNumber1(odd1);
console.log(oddNo1);

//Arrow function

let odd2=[1,2,3,4,5,6,7,8,9,10]
let oddNo2=[]
let oddNumber2 = (a) => {
    for(let i=0;i<a.length;i++){
if(a[i]%2==0){
    console.log();
}else{
    oddNo2.push(a[i]);
     }
  }
}
oddNumber2(odd2);
console.log(oddNo2);

//----------------------------------------------------------------------------------



// b.Convert all the strings to title caps in a string array

//anonymous function

function titleCaps(str) {
          str=str.toLowerCase().split(" ");
    for(let i=0;i<str.length;i++){
          str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1)
    }
    return str.join(" ");
} 
let output=titleCaps("Every expert is once a beginner")
console.log(output);


//Function Expression

let titleCaps1=function(str) {
    str=str.toLowerCase().split(" ");
for(let i=0;i<str.length;i++){
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1)
}
return str.join(" ");
} 
let output1=titleCaps1("NEVER QUIT WITHOUT TRYING")
console.log(output1);


//Arrow function

let titleCaps2=(str) => {
    str=str.toLowerCase().split(" ");
for(let i=0;i<str.length;i++){
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1)
}
return str.join(" ");
} 
let output2=titleCaps2("i am a full stack developer")
console.log(output2);
//---------------------------------------------------------------------------------


// c.Sum of all numbers in an array

//anonymous function
let summation=[1,2,3,4,5]

function sum(a) {
    sum=0
    for(let i=0;i<a.length;i++){
        sum=sum+a[i]
     } 
        console.log(sum);
}
sum(summation);


//Function Expression
let summation1=[1,2,3,4,5]

let  sum1=function(a) {
    sum=0
    for(let i=0;i<a.length;i++){
        sum=sum+a[i]
     } 
        console.log(sum);
}
sum1(summation1);


//Arrow function
let summation2=[1,2,3,4,5]

let  sum2=(a) => {
    sum=0
    for(let i=0;i<a.length;i++){
        sum=sum+a[i]
     } 
        console.log(sum);
}
sum2(summation2);
//--------------------------------------------------------------------

// d.Return all the prime numbers in an array

// //anonymous function
function findPrime(arr){
let sortArray=[];
arr.forEach((num) => {
  let factor=0;
  for(let i=0;i<=num;i++){
    if(num%i===0){
      factor++
    }
  }
  if(factor===2){
    sortArray.push(num)
  }
});
console.log(sortArray);
}
findPrime([1,2,3,4,5,6,7,8,9,10,11]);


//Function Expression

let findPrime1 = function(arr){
  let sortArray=[];
  arr.forEach((num) => {
    let factor=0;
    for(let i=0;i<=num;i++){
      if(num%i===0){
        factor++
      }
    }
    if(factor===2){
      sortArray.push(num)
    }
  });
  console.log(sortArray);
  }
  findPrime1([1,2,3,4,5,6,7,8,9,10,11]);

//Arrow function
let findPrime2 = (arr) => {
  let sortArray=[];
  arr.forEach((num) => {
    let factor=0;
    for(let i=0;i<=num;i++){
      if(num%i===0){
        factor++
      }
    }
    if(factor===2){
      sortArray.push(num)
    }
  });
  console.log(sortArray);
  }
  findPrime2([1,2,3,4,5,6,7,8,9,10,11,17,19]);





//--------------------------------------------------------------------

// e.Return all the palindromes in an array

//anonymous function
let words=["malayalam","racecar","did","tamil","india",12321];
let arr = []

function paliname(a) {
let str = a.slice(0);
let pal = str.toString().split("").reverse().join("").split(",");

for (let i = 0; i < words.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[i] == pal[k]) {
      arr.push(words[i])
    }
  }
}
}
paliname(words)
console.log(arr);

//Function Expression
let words1=["malayalam","racecar","did","tamil","india",12321];
let arr1= []

let paliname1 = function (a) {
let str1= a.slice(0);
let pal1= str1.toString().split("").reverse().join("").split(",");

for (let i = 0; i < words1.length; i++) {
  for (let k = 0; k < pal1.length; k++) {
    if (words1[i] == pal1[k]) {
      arr1.push(words1[i])
    }
  }
}
}
paliname1(words1)
console.log(arr1);

//Arrow function
let words2=["malayalam","racecar","did","tamil","india",12321];
let arr2= []

let paliname2 =  (a) => {
let str2= a.slice(0);
let pal2= str2.toString().split("").reverse().join("").split(",");

for (let i = 0; i < words2.length; i++) {
  for (let k = 0; k < pal2.length; k++) {
    if (words2[i] == pal2[k]) {
      arr2.push(words2[i])
    }
  }
}
}
paliname2(words2)
console.log(arr2);
//--------------------------------------------------------------------


// f.Return median of two sorted arrays of the same size

//Anonymous function

function medianOfArray(ar1,ar2){
    let concat=ar1.concat(ar2);
    concat=concat.sort(function(a,b){return a-b});
    // console.log(concat);
    let length=concat.length;

  if(length%2==1){
      // console.log(concat[(length/2)-0.5]);
      return concat[(length/2)-0.5];
  }
  else{
    // console.log((concat[length/2]+concat[(length/2)-1])/2);
    return (concat[length/2]+concat[(length/2)-1])/2
  }

}

let med=medianOfArray([1,2,3,4],[5,6,7,8])
console.log(med);


//Function Expression

 let medianOfArray1=function(ar1,ar2){
  let concat=ar1.concat(ar2);
  concat=concat.sort(function(a,b){return a-b});
  // console.log(concat);
  let length=concat.length;

if(length%2==1){
    // console.log(concat[(length/2)-0.5]);
    return concat[(length/2)-0.5];
}
else{
  // console.log((concat[length/2]+concat[(length/2)-1])/2);
  return (concat[length/2]+concat[(length/2)-1])/2
}

}
let med1=medianOfArray1([1,2,3,4],[5,6,7,8])
console.log(med1);



//Arrow Function


let medianOfArray2=(ar1,ar2) =>{
  let concat=ar1.concat(ar2);
  concat=concat.sort(function(a,b){return a-b});
  // console.log(concat);
  let length=concat.length;

if(length%2==1){
    // console.log(concat[(length/2)-0.5]);
    return concat[(length/2)-0.5];
}
else{
  // console.log((concat[length/2]+concat[(length/2)-1])/2);
  return (concat[length/2]+concat[(length/2)-1])/2
}

}
let med2=medianOfArray2([1,2,3,4],[5,6,7,8])
console.log(med2);



//--------------------------------------------------------------------
// g.Remove duplicates from an array

//Anonymous function
let array=[1,2,3,4,4,4,5,6,3,2,8,9,15,12,12,14,13,13];
let nonRe=[];
function repeat(a){
for(let i=0;i<a.length;i++){
  if(nonRe.includes(a[i])){
    console.log();
  }else{
    nonRe.push(a[i])
  }
}
}
repeat(array)
console.log(nonRe);

//Function Expression
let array1=[1,2,3,4,4,4,5,6,3,2,8,9,15,12,12,14,13,13];
let nonRe1=[];
let  repeat1=function(a){
for(let i=0;i<a.length;i++){
  if(nonRe1.includes(a[i])){
    console.log();
  }else{
    nonRe1.push(a[i])
  }
}
}
repeat1(array1)
console.log(nonRe1);

//Arrow function
let array2=[1,2,3,4,4,4,5,6,3,2,8,9,15,12,12,14,13,13];
let nonRe2=[];
let  repeat2=(a)=>{
for(let i=0;i<a.length;i++){
  if(nonRe2.includes(a[i])){
    console.log();
  }else{
    nonRe2.push(a[i])
  }
}
}
repeat2(array2)
console.log(nonRe2);

//--------------------------------------------------------------------


// h.Rotate an array by k times


//Anonymous function
function rotateArray(arr,k){
  for(let i=0; i<k; i++){
    let temp=arr[0];
    for(let j=0; j<arr.length; j++){
        arr[j]=arr[j+1];
    }
    arr[arr.length-1]=temp
  }
  return arr;
}

let rotate=rotateArray([1,2,3,4,5],1)
console.log(rotate);  



// Function Expression
let  rotateArray1 =function(arr,k){
  for(let i=0; i<k; i++){
    let temp=arr[0];
    for(let j=0; j<arr.length; j++){
        arr[j]=arr[j+1];
    }
    arr[arr.length-1]=temp
  }
  return arr;
}

let rotate1=rotateArray1([1,2,3,4,5],2)
console.log(rotate1);  



// Arrow Function
let  rotateArray2 =(arr,k) => {
  for(let i=0; i<k; i++){
    let temp=arr[0];
    for(let j=0; j<arr.length; j++){
        arr[j]=arr[j+1];
    }
    arr[arr.length-1]=temp
  }
  return arr;
}

let rotate2=rotateArray2([1,2,3,4,5],3)
console.log(rotate2);



