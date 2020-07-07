// For example, given N = 1041 the function should return 5, 
// because N has binary representation 10000010001 
// and so its longest binary gap is of length 5. 

// Given N = 32 the function should return 0, 
// because N has binary representation '100000' and thus no binary gaps


function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const num = N.toString(2);
    const arr = [];
    for(let i=0 ; i< num.length; i++) {
        if(num[i] === '1') {
            arr.push(i);
        }
    }
    let res = 0;
    for(let i =0 ; i< arr.length - 1 ; i++) {
        res = Math.max(res, (arr[i+1] - arr[i] - 1));
    }
    return res;
}