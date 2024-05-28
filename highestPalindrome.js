function highestPalindrome(s, n) {
    function isPalindrome(str, left, right) {
        if (left >= right) return true;
        if (str[left] !== str[right]) return false;
        return isPalindrome(str, left + 1, right - 1);
    }

    function makePalindrome(str, left, right, replacements, originalReplacements) {
        if (left >= right) return { palindrome: str, replacementsLeft: replacements };

        if (str[left] === str[right]) {
            return makePalindrome(str, left + 1, right - 1, replacements, originalReplacements);
        } else if (replacements > 0) {
            let maxDigit = Math.max(str[left], str[right]);
            let replaceLeft = makePalindrome(str.substring(0, left) + maxDigit + str.substring(left + 1), left + 1, right - 1, replacements - 1, originalReplacements);
            let replaceRight = makePalindrome(str.substring(0, right) + maxDigit + str.substring(right + 1), left + 1, right - 1, replacements - 1, originalReplacements);

            let maxPalindrome;
            if (replaceLeft.replacementsLeft >= 0 && replaceRight.replacementsLeft >= 0) {
                maxPalindrome = replaceLeft.palindrome > replaceRight.palindrome ? replaceLeft : replaceRight;
            } else if (replaceLeft.replacementsLeft >= 0) {
                maxPalindrome = replaceLeft;
            } else {
                maxPalindrome = replaceRight;
            }

            if (maxPalindrome.replacementsLeft < 0) return { palindrome: str, replacementsLeft: -1 };

            if (originalReplacements - maxPalindrome.replacementsLeft < originalReplacements && replacements > 0) {
                let maxPalStr = maxPalindrome.palindrome.split('');
                if (left == right) {
                    maxPalStr[left] = '9';
                } else {
                    if (maxPalStr[left] !== '9' && replacements > 0) {
                        maxPalStr[left] = '9';
                        replacements--;
                    }
                    if (maxPalStr[right] !== '9' && replacements > 0) {
                        maxPalStr[right] = '9';
                        replacements--;
                    }
                }
                maxPalindrome.palindrome = maxPalStr.join('');
            }

            return maxPalindrome;
        } else {
            return { palindrome: str, replacementsLeft: -1 };
        }
    }

    if (!/^\d+$/.test(s)) return -1;

    let result = makePalindrome(s, 0, s.length - 1, n, n);

    return isPalindrome(result.palindrome, 0, result.palindrome.length - 1) ? result.palindrome : -1;
}

console.log(highestPalindrome("3943", 1));
console.log(highestPalindrome("092282", 3));
console.log(highestPalindrome("0011", 1)); 