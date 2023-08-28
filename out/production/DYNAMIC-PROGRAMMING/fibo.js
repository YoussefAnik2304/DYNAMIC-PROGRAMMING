//regulare recursion of fibo with O(2^n)
const fibo=(n)=>{
    if(n<2) return 1;
    return fibo(n-1)+fibo(n-2);
}
//now lets use memorisation
const fibo_new=(n,memo={})=>{
    if(n in memo) return memo[n];
    if(n<=1) return 1;
    memo[n]=fibo_new(n-1,memo)+fibo_new(n-2,memo);
    return memo[n];
}
console.time('my fibo');
console.log(fibo(5));
console.timeEnd('my fibo');
console.time('my fibon');
console.log(fibo_new(5));
console.timeEnd('my fibon');