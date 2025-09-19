// function  register(){
//     console.log('register end')
// setTimeout(()=>{
//     console.log("email sent")
// })
// }
// function sendEmail(){
//     console.log("login end")
// }

// function getdata(){
//     console.log("getdata end")
// }
// function login(){
//     console.log("login end")
// }
// function displayData(){
//     console.log("displayData end")
// }

// console.log("end of application")
// console.time('Response')
// setTimeout(displayData,6000)
// console.timeEnd("Response")

// console.time('Response')
// setTimeout(register,6000)
// console.timeEnd("Response")

// console.time('Response')
// setTimeout(getdata,6000)
// console.timeEnd("Response")

// console.time('Response')
// setTimeout(displayData,6000)
// console.timeEnd("Response")

// console.time('Response')
// setTimeout(login,6000)
// console.timeEnd("Response")


const test = new Promise((resolve,reject)=>{
    let op = true;
    if(op){
        resolve("operation successful")
    }
    else{
        reject("operation failed")
    }
})
// test.then(value=>{
//     console.log(value)
// }).catch(err=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("operation completed")
// })

// async function start() {
//     function delay(){
//         setTimeout(()=>{
//             console.log("delay")
//         },7000)
//     }
//     console.log(delay())
//     const result = await test;
    
// }
// start()

async function start() {
    function delay(ms) {
        return new Promise(resolve => {
           
            setTimeout(() => {
                console.log("delay");
                resolve("done");
            }, ms);
           
        });
    }
try {
    await delay(7000);  // waits 7 sec before continuing
    const result = await test;
    console.log(result);
}
catch (err) {
    console.log(err);
}
finally {
    console.log("operation completed");
}
}
start()
