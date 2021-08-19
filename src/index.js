function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    
    let result = expr.split((/\s+/g));
    let res = result.join('').split('');
    let num = 0;
    //let arr = result.filter(e => e !== '').join(',');
    console.log(res[1]);
    for (let i = 0; i < res.length; i++) {
        if (res[i] === '+') {
          let add = Number(res[i-1]) + Number(res[i+1]);
           return add;
        } else if (res[i] === '-') {
          let dec = Number(res[i-1]) - Number(res[i+1]);
          return dec;
        } else if (res[i] === '*') {
           let mult = Number(res[i-1]) * Number(res[i+1]);
            return mult;
    } else if (res[i] === '/') {
        let div = Number(res[i-1]) / Number(res[i+1]);
        return div;

}
    }
}
module.exports = {
    expressionCalculator
}