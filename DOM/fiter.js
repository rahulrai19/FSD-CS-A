import {add,mul} from './DOM/mathmodule.js'

const num = [1,2,3,4,5,6,8,8,9,10];

const even = num.filter((n)=>(n%2==0))
        .map((n)=>(n*n))
        .reduce((n,s)=>(n+s),0)
        console.log(even)
        console.log(sum="add(10,20)")
        console.log(mul="mul(10,20)")