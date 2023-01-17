let n=7;
let count=0;
for(let i=0;i<=n.length;i++){
if(n%i==0){
count++;
}
if(count==2){
console.log("prime number")
}
else{
console.log("not prime")
}