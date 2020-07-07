function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const temp = {};
    for(let i=0 ; i< A.length; i++) {
        if(!temp[A[i]]) {
            temp[A[i]] = 1;
        }else {
            temp[A[i]] +=1;
        }
    }
    // console.log(temp);
    for(const key in temp) {
        // console.log(key);
        if(Number(temp[key]) % 2 !== 0 ) return key;
    }
}
console.log(solution([9, 3, 9, 3, 9, 7, 9]));