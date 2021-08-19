function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    
    let result = expr.split((/\s+/g));
    let res = result.join('').split('');
    let num = 0;
    let leftCount = 0;
    let rightCount = 0;

    for (let br of res) {
        if (br === '('){
            leftCount++;
        }
        if (br === ')') {
            rightCount--;
        }
    }

    if (leftCount !== rightCount) {
        throw new Error('ExpressionError: Brackets must be paired');
    }

    for (let i = 0; i < res.length; i++) {
        if (res[i] === 0 && res[i-1] === '/') {
            throw new Error('TypeError: Division by zero.')
        } else if (res[i] === '+') {
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

    for (let i = 0; i < res.length; i++){
        
    }
}
module.exports = {
    expressionCalculator
}