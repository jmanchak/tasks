/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let copyNumbers: number[] = [...numbers];
    if (numbers === null) {
        copyNumbers = [];
    }
    if (numbers.length === 1) {
        copyNumbers = [...numbers, ...numbers];
    }
    if (numbers.length >= 1) {
        const firstElem = numbers[0];
        const lastElem = numbers[numbers.length - 1];
        copyNumbers = [firstElem, lastElem];
    }

    return copyNumbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numElems: number): number => numElems * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integerArray = numbers.map((intElem: string): number =>
        !Number.isNaN(parseInt(intElem)) ? parseInt(intElem) : 0
    );

    return integerArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removeSymbol = amounts.map((hasDollar: string): string =>
        hasDollar.charAt(0) === "$"
            ? (hasDollar = hasDollar.slice(1, hasDollar.length))
            : hasDollar
    );

    const numberAmounts = removeSymbol.map((intElem: string): number =>
        !Number.isNaN(parseInt(intElem)) ? parseInt(intElem) : 0
    );

    return numberAmounts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removeQuestions = messages.filter(
        (question: string): boolean =>
            question.charAt(question.length - 1) !== "?"
    );

    const makeExclaimations = removeQuestions.map((message: string): string =>
        !message.includes("!") ? message : message.toUpperCase()
    );

    return makeExclaimations;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const theseWords = words.filter(
        (short: string): boolean => short.length < 4
    );

    const sumWords = theseWords.reduce((currTotal: number) => currTotal + 1, 0);

    return sumWords;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const seeIfAllRGB = colors.map((isRGB: string): boolean =>
        isRGB === "red" || isRGB === "green" || isRGB === "blue" || isRGB === ""
            ? true
            : false
    );

    const areAllTrue = seeIfAllRGB.every(
        (isTrue: boolean): boolean => isTrue === true
    );

    return areAllTrue;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currTotal: number, num: number) => currTotal + num,
        0
    );

    const makeNumString = addends.map((nums: number): string =>
        nums.toString()
    );

    let rightSide: string;
    if (makeNumString.length === 0) {
        return "0=0";
    } else {
        rightSide = makeNumString.join("+");
        return sum + "=" + rightSide;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const copyValues = [...values];

    const isNeg = values.findIndex((negValue: number): boolean => negValue < 0);

    if (isNeg === -1) {
        const noNeg = values.reduce(
            (currTot: number, currVal: number) => currTot + currVal,
            0
        );

        copyValues.splice(values.length, 0, noNeg);
        return copyValues;
    } else if (isNeg === 0) {
        copyValues.splice(isNeg + 1, 0, 0);
        return copyValues;
    } else {
        const negValue = values.reduceRight(
            (currTot: number, currVal: number) => currTot + currVal,
            values[isNeg]
        );
        copyValues.splice(isNeg + 1, 0, negValue);
        return copyValues;
    }
}

/*
function every(seeIfAllRGB: boolean[], length: number) {
    throw new Error("Function not implemented.");
}
*/
