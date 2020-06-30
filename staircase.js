function staircase(n) {
    for (let i = 0; i < n ; i++) {
        let str='';
        for (let j=0; j < n ; j++){
            
            if (j >= n-1-i) {
                str += '#'
            }
            else {
                str += ' ';
            }
        }
        console.log(str);
    }
}
