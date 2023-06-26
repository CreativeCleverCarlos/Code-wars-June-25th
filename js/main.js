/**
 When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

**/

function switchItUp(number){
    if (number === 0){
        return "zero"
    } else if (number === 1){
        return "one"
    }else if (number === 2){
        return "two"
    }else if (number === 3){
        return "three"
    } else if (number === 4){
        return "four"
    }else if (number === 5){
        return "five"
    }else if (number === 6){
        return "six"
    }else if (number === 7){
        return "seven"
    }else if (number === 8){
        return "eight"
    }else if (number === 9){
        return "nine"
    }
    }

    console.log(switchItUp(9))