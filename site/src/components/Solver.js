/* eslint-disable */
import { PriorityQueue } from "./Priority";
// general approach: distance heuristic computed from combined number's proximity to 163

export const aStar = (arr) => {
    const frontier = new PriorityQueue();
    const visited = new Set();
    const costSoFar = {}; // cost is irrelvant right since every solution has same cost (num steps)
    const moves = {}; // arr: list of ops
    const solutionPath = "";

    // initial enqueue of input arr with priority 0
    frontier.enqueue([arr, 0]);
    costSoFar[JSON.stringify(arr)] = 0;

    var ctr = 0;

    while (frontier.size != 0) {
    // while (ctr < 3) {
        ctr += 1;
        console.log("NOT EMPTY");
        // get top element of frontier priority queue
        console.log("PRINT COLLEC");
        frontier.printCollection();
        const currNode = frontier.dequeue();
        console.log("CURRNODE: " + JSON.stringify(currNode));

        if (!visited.has(currNode)) {
            console.log("NOT VISITED");
            visited.add(currNode);

            // if (JSON.stringify(currNode) in costSoFar) {
            //     console.log("IN COST ALREADY, INCR");
            //     costSoFar[JSON.stringify(currNode)] += 1;
            // } else {
            //     console.log("ADD TO COST DICT");

            //     costSoFar[JSON.stringify(currNode)] = 0;
            // }

            if ((JSON.stringify(currNode) in moves)) {
                costSoFar[JSON.stringify(currNode)] = moves[JSON.stringify(currNode)].length;
            } else {
                costSoFar[JSON.stringify(currNode)] = 0;
                moves[JSON.stringify(currNode)] = [];
            }

            // solved condition check
            if (is_solved(currNode)) {
                console.log("SOLVED CONDITION YAY");

                return "SOLVED!!!" + JSON.stringify(moves[JSON.stringify(currNode)]);
            }

            // arr of successor arrs with computed items
            const successRes = successors(currNode);
            console.log("PRINT SUCCESSORS: " + JSON.stringify(successRes));


            // iterate over successors of current array
            for (var i = 0; i < successRes.length; i += 1) {
                console.log("IN SUCCESS LOOP");

                // current successor
                const currS = successRes[i][0];
                const newCost = costSoFar[JSON.stringify(currNode)] + 1;

                if (!(JSON.stringify(currS) in costSoFar) || newCost < costSoFar[JSON.stringify(currS)]) {
                    const movesCopy = [];

                    for (var j = 0; j < moves[JSON.stringify(currNode)].length; j += 1) {
                        movesCopy.push(moves[JSON.stringify(currNode)][j]);
                    }

                    movesCopy.push(successRes[i][1][1]); // append latest op
                    moves[JSON.stringify(currS)] = movesCopy;

                    costSoFar[JSON.stringify(currS)] = newCost;
                    const priority = newCost + heur(successRes[i][0]);
                    console.log("PRIORITY: " + priority);
                    // const priority = newCost + heur(successRes[i][1]);

                    frontier.enqueue([currS, priority]);
                }
            }

        }
    }

    return "HMMM";
}

export const successors = (arr) => {
    // get all possible n choose 2 options
    const choices = choose(arr, 2);

    // successors
    const results = [];

    // console.log("CHOICES: " + JSON.stringify(choices));

    for (var i = 0; i < choices.length; i += 1) {
        const opsRes = ops(choices[i]);
        // console.log("OPS RES: " + JSON.stringify(opsRes));

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
            newArr.push(opsRes[j][0]);
            // console.log("NEW ARR2: " + JSON.stringify(newArr));

            // TODO: HANDLE PERMUTATION DUPLICATE SUCCESSORS?
            results.push([newArr, opsRes[j]]);
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
        results.push([sum, arr[0] + ' + ' + arr[1]]);
        //results.push(sum);

    }

    if (!results.includes(diff) && diff != 0) { // should solutions using 0 be allowed
        results.push([diff, '|'+ arr[0] + ' - ' + arr[1] + '|']);
       // results.push(diff);

    }

    if (!results.includes(mult)) {
        results.push([mult, arr[0] + ' * ' + arr[1]]);
        //results.push(mult);

    }
    
    if (arr[0] % arr[1] == 0) {
        const div = arr[0] / arr[1];

        if (!results.includes(div)) {
            results.push([div, arr[0] + ' / ' + arr[1]]);
            //results.push(div);

        }
    }

    if (arr[1] % arr[0] == 0) {
        const div = arr[1] / arr[0];

        if (!results.includes(div)) {
            results.push([div, arr[1] + ' / ' + arr[0]]);
            //results.push(div);
        }
    }

    return results;
}

export const choose = (arr, k, prefix=[]) => {
    if (k == 0) return [prefix];

    return arr.flatMap((v, i) => choose(arr.slice(i+1), k-1, [...prefix, v]));
}

const heur = (arr) => {
    // should it actually be the largest value in the array subtracted from 163

    // return Math.abs(163 - val);
    console.log("PRIOR ARR: " + JSON.stringify(arr));
    return Math.abs(163 - Math.max(...arr));
}

const is_solved = (arr) => {
    if (arr.length == 1 && arr[0] == 163) {
        return true;
    }

    return false;
}