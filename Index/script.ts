
//CHUNK
let chunk=(arr,n)=>{
    let charr=[];
    let sarr=[...arr]
    let size=Math.ceil(sarr.length/n)
    for(let i=0;i<size;i++)
    {
        charr.push(sarr.splice(0,n))
    }
    console.log("Output of Chunk is:")
 console.log(charr);


}
chunk(['a','b','c','d'],2)


//Sum

let sum=(...args)=>{
    let sum=0;
    for (const i of args) {
        sum=sum+i;
        
    }
    console.log(`output of Sum function is ${sum}`);
}

sum(1,2,3,4,5,6)


//Reduce
var red=(i,num)=>{
    return num+i;
}
let reduce=(arr,fun,num:number)=>
{
    let sparr=[...arr]
    for (const i of sparr) {
        num=fun(i,num);
    }
   console.log(`output of Reduce function is ${num}`);
}
let array=[12,23,32]
reduce(array,red,0)


//filter

let even=(num:number)=>
{
    if(num%2===0)
    {
        return true;
    }
    return false;
}

let filter=(arr,fun)=>
{
   var result=[];
   for (const i of arr) {
       if(fun(i))
       {
           result.push(i)
       }
       
   }
   console.log(`output of Filter function is ${result}`);
}
let fil=[12,13,15,23,33,21,33,54,32]
filter(fil,even)


//find
let fin=(i,index=0)=>
{
    if(i%2===0)
    {
        return true;
    }
    return false;
}

var find=(arr,fi,ind?:number)=>
{
    for (const i of arr) {
        if(fi(i,ind))
        {
            console.log("Output of Find Function is "+i)
            return;
        }
        
    }
    console.log("Output of Find Function is "+undefined)

}
let fin1=[15,57,65,23,66]
find(fin1,fin,0)
