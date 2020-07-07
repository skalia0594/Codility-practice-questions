function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const arr = {};
    for(let i =0; i< A.length; i++) {
        arr[i+1] = 0;
    }
    let count=0;
    for(let j =0 ; j< A.length; j++) {
        if(arr[A[j]]===0) {
            arr[A[j]] += 1;
        }else {
            count++;
        }
    }
    if(count === A.length) return 1;
    for(let i =0 ; i< A.length ; i++) {
        if(arr[i]=== 0) return i;
    }
    return A.length+1;
}

console.log(solution([1, 2, 3]));