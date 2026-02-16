function myReducer(arr, callback, initialValue){
    if(arr.length==0){
        throw new Error('Array is undefined');
    }
   let accumulator 
   let startIndex;

   if(initialValue!==undefined){
    accumulator = initialValue
    startIndex=0
   }else{
    accumulator = arr[0]
    startIndex = 1
   }
   for(let i = startIndex; i<arr.length; i++ ){
    accumulator = callback(accumulator, arr[i])
   }
   return accumulator
}
const numArr = [1,2,3,4]
const add = (a,b)=> a+b;
console.log(myReducer(numArr,add,0))