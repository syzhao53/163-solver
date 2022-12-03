/* eslint-disable */

// general approach: distance heuristic computed from combined number's proximity to 163

export const aStar = (v1, v2, v3, v4, v5, v6) => {
    return 0;
}
export const successors = (arr) => {
    // get all possible n choose 2 options
    const choices = choose(arr, 2);

    // successors
    const results = [];

    // console.log("CHOICES: " + JSON.stringify(choices));

    for (var i = 0; i < choices.length; i += 1) {
        const opsRes = ops(choices[i]);
        // console.log(opsRes);

        for (var j = 0; j < opsRes.length; j += 1) {
            const newArr = [];

            for (var k = 0; k < arr.length; k += 1) {
                // copy array but without the two elements chosen
                if ((arr[k] != choices[i][0]) && (arr[k] != choices[i][1])) {
                    newArr.push(arr[k]);
                }
            }

            // console.log("NEW ARR: " + JSON.stringify(newArr));

            // add newly computed val
            newArr.push(opsRes[j]);
            // console.log("NEW ARR2: " + JSON.stringify(newArr));

            results.push(newArr);
        }
    }

    // how do you track the operation that's done when you want to display the final solution path
    // should newly computed val from ops arr also be returned (tuple of val and newArr?)
    return results;
}

const ops = (arr) => {
    const results = [];
    const sum = arr[0] + arr[1];
    const diff = Math.abs(arr[0] - arr[1]);
    const mult = arr[0] * arr[1];

    if (!results.includes(sum)) {
        results.push(sum);
    }

    if (!results.includes(diff)) {
        results.push(diff);
    }

    if (!results.includes(mult)) {
        results.push(mult);
    }
    
    if (arr[0] % arr[1] == 0) {
        const div = arr[0] / arr[1];

        if (!results.includes(div)) {
            results.push(div);
        }
    }

    if (arr[1] % arr[0] == 0) {
        const div = arr[1] / arr[0];

        if (!results.includes(div)) {
            results.push(div);
        }
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