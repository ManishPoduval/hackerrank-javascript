function compareTriplets(a, b) {
    let al = 0, bo = 0;
    if (!a.length || !b.length) return [0, 0] ;
    a.forEach((aa, i) => {
        if (aa !== b[i]) aa > b[i] ? al++ : bo++;     
    });
    return [al, bo];
}
