function miniMaxSum(arr) {
    if (!arr.length) return 0;
    let mini = 0, max=0
    let cloned= JSON.parse(JSON.stringify(arr));
    cloned.sort((n1, n2) => n2 - n1)
    let maxN = cloned.slice(0, arr.length - 1);
    max = maxN.reduce((acc, a) => acc + a);
    let minN = cloned.slice(1, arr.length);
     mini = minN.reduce((acc, a) => acc + a);
    console.log(mini, max);
}
