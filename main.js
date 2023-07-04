let arr = [45,23,21]

// Array map method
let  a = arr.map((value,index,array) => 
{
    console.log(value,index,array)
    return value+1

})
console.log(a)

// Array Filter Method

let arr2 = [45,23,21,0,3,5]

let b = arr2.filter((value) => 
{
    return value<10
})

console.log(b)


// Array Reduce Method

let arr3 = [1,2,3,5,2,1]

let c = arr3.reduce((v1,v2)=>
{
    return v1+v2
})

console.log(c)
