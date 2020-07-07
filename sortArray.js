function sortArray(A) {
    const n = A.length;
    let temp;
    for(let i=0;i<n;i++){
        if(A[i]>0&&A[i]<=n){
            if(A[i]-1!=i&&A[A[i]-1]!=A[i]){
                temp=A[A[i]-1];
                A[A[i]-1]=A[i];
                A[i]=temp;
                i--;
            }
        }
    }
    return A;
}

console.time(sortArray);
const ans = sortArray([2,4,3,1,5]);
console.timeEnd(sortArray);
console.log(ans);