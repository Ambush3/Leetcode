function minRemoveToMakeValid(s){
   // stack solution

   // push '(' to stack
   // pop off the top stack element every time there's a matching ')'
   // if we find a ')' and the stack is empty, we know we have an extra ')'
   // any left over '(' in the stack are extra and invalid 
   // remove all the invalid ')' and '(' from the string

    let stack = [];
    let invalid = new Set();

    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            stack.push(i);
        } else if(s[i] === ')'){
            if(stack.length){
                stack.pop();
            } else {
                invalid.add(i);
            }
        }
    }

    while(stack.length){
        invalid.add(stack.pop());
    }

    let result = '';
    for(let i = 0; i < s.length; i++){
        if(!invalid.has(i)){
            result += s[i];
        }
    }

    return result;

}