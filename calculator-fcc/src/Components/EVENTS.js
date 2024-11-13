export const EVENTS = {
    canAddOperator: canAddOperator,
    canAddBrackets: canAddBrackets,
    canAddZero: canAddZero,
    changeToFloat: changeToFloat,
    canGetSQRT: canGetSQRT,
    canRemoveLastcharacter: canRemoveLastcharacter,
    canCloseBracket: canCloseBracket,
    changeSign: changeSign
}







function canAddOperator (arr, op) {
    if (arr.length === 0 && op !== "-") return false;
    if (/\D/.test(arr.at(-1)) && arr.at(-1) !== "-") return false;
    return true
};

function canAddBrackets (arr, countOfBrackets, bracket) {
    if (arr.length === 0 && bracket === "(") return true;

    if (bracket === ")") {
        if (countOfBrackets === 0) return false;
        if (/\D/.test(arr.at(-1)) && arr.at(-1) !== ")") return false;
    }
    return true
};

function canAddZero (arr, flag) {
    if (flag) return true;
    if (!flag && arr.at(-1) === "0") return false;
    return true;
};

function changeToFloat (arr, flag) {
    if (flag) return false;
    return true;
};

function canGetSQRT (arr, operators) {
    if (arr.length === 0) return true;
    if (operators.includes(arr.at(-1)) || arr.at(-1) === ")") return true;
    return false
};

function canRemoveLastcharacter (arr) {
    if (arr.length === 0) return false;
    return true
};

function canCloseBracket (arr, countOfBrackets) {
    if (countOfBrackets > 0) return true;
    
    return false;
};

function changeSign (userInpArr, mathFormArr) {
    if (userInpArr.length === 0) {
        return {
            mathFormArr: ["(-1)*"],
            currentUserInput: ["-"]
        }
    } else {
        let reversedUserInp = userInpArr.reverse();
        let flag = false;
        for (let i = 0; i < reversedUserInp.length; i++) {
            if (/[^\d\.]/.test(reversedUserInp[i])) {
                if (["+", "-"].includes(reversedUserInp[i])) {
                    reversedUserInp[i] = reversedUserInp[i] === "+" ? "-" : "+";
                    flag = true;
                    break;
                } 
                else {
                    reversedUserInp.splice(i, 0, `${reversedUserInp[i]}(-`)
                    flag = true;
                    break;
                } 
            }
            // console.log(reversedUserInp)
        }
        if (!flag) {reversedUserInp.push("(-")}
        
        return {
            mathFormArr: [...mathFormArr, "*(-1)"],
            currentUserInput: [...reversedUserInp.reverse(), ")"]
        } 


    }

}