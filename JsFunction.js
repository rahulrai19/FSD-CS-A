// JS Function

function hello(user="Guest"){
    console.log(`Hello ${user}`);
}
hello()
hello("rahul");

function sum(a,b){
    console.log('Before Return')
    return a+b;
    console.log('after Retrun')
}
sum(10,5)

console.log(sum(10,5))

const add=(a,b)=>{
    return a+b;

}

console.log(add(30,10))

// (function(){
//    console.log("Hello");
// })();

function f1(user,callBack){
    console.log('Hello')
   
    callBack()
}

f1('admin',()=>{
    console.log(add(34,34))
})
