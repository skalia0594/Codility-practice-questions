function solution (A, B, K){
    let init=A;
    for(let i=A; i<= B; i++) {
        if(i % K === 0) {
            init = i;
            break;
        }
    }
    let ans = Math.ceil((B -init) / K);
    if(B%K === 0) ans++;
    return ans;
}

console.log(solution(1,1,11));
console.log(solution(6,11,2));