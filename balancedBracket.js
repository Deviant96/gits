function balancedBracket(brackets) {
    const openings = [];
    brackets = brackets.replaceAll(' ', '').split('');

    for (let i = 0; i < brackets.length; i++) {
        currentIteration = brackets[i];
        if (
            currentIteration === '(' ||
            currentIteration === '{' ||
            currentIteration === '['
        ) {
            openings.push(brackets[i]);
        }

        if (currentIteration === ')') {
            if (openings.pop() !== "(") return "NO"
        }

        if (currentIteration === '}') {
            if (openings.pop() !== "{") return "NO"
        }

        if (currentIteration === ']') {
            if (openings.pop() !== "[") return "NO"
        }
    }
    
    return openings.length === 0 ? 'YES' : 'NO';
}

console.log(balancedBracket('{ [ ( ) ] }'));
console.log(balancedBracket("{ [ ( ] ) }"))
console.log(balancedBracket("{ ( ( [ ] ) [ ] ) [ ] }"))