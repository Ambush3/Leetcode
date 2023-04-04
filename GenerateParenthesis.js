function generateParenthesis(n) {
    let result = [];
    if (n === 0) {
        result.push('');
    } else {
        for (let i = 0; i < n.length; i++){
            for (let a of generateParenthesis[i]) {
                for (let b of generateParenthesis(n - 1 - i)){
                    result.push("(" + a + ")" + b);
                }
            }
        }
    }
    return result
};