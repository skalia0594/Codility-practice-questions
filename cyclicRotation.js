function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    const size = A.length;
    if(size === K) return A;
    const B = [];
    for(let i =0 ; i< size ; i++) {
        B[(i+K)%size] = A[i];
    }
    return B;
}

console.log(solution([3, 8, 9, 7, 6], 3));