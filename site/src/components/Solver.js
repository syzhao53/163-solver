/* eslint-disable */

// general approach: distance heuristic computed from combined number's proximity to 163

export const aStar = (v1, v2, v3, v4, v5, v6) => {
    return 0;
}
const successors = (arr) => {
    // get all possible n choose 2 options
    const choices = choose(arr, 2);

    // successors
    const results = [];
    
    // copy of original input arr
    const copy = arr.map(a => {return {...a}}) // ?

    for (i = 0; i < choices.length; i += 1) {
        const opsRes = ops(choices[i]);

        for (j = 0; j < opsRes.length; j += 1) {
            // remove the 2 elements from arr
            // add new element from opsRes
            // add new array to results
        }
    }

    return results;
}

const ops = (arr) => {
    const results = [];

    results.push(arr[0] + arr[1]);
    results.push(Math.abs(arr[0] - arr[1]));
    results.push(arr[0] * arr[1]);
    
    if (arr[0] % arr[1] == 0) {
        results.push(arr[0] / arr[1]);
    }

    if (arr[1] % arr[0] == 0) {
        results.push(arr[1] / arr[0]);
    }

    return results;
}

export const choose = (arr, k, prefix=[]) => {
    if (k == 0) return [prefix];

    return arr.flatMap((v, i) => choose(arr.slice(i+1), k-1, [...prefix, v]));
}

const is_solved = (arr) => {
    return true;
}