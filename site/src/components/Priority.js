/* eslint-disable */

export function PriorityQueue() {
    var array = [];

    this.printCollection = function () {
        console.log(array);
      };

    this.enqueue = function (newMem) {
        if (this.isEmpty()) {
            console.log("PUSHED" + JSON.stringify(newMem));
            array.push(newMem);
        } else {
            var added = false;

            for (var i = 0; i < array.length; i++) {
                if (newMem[1] < array[i][1]) {
                    array.splice(i, 0, newMem);
                    added = true;
                    break;
                }
            }

            if (!added) {
                array.push(newMem);
            }
        }
    };

    this.dequeue = function () {
        var value = array.shift();
        console.log("DEQUEUE: " + JSON.stringify(value));
        
        return value[0];
    };

    this.front = function () {
        return array[0];
    };

    this.size = function () {
        return array.length;
    };

    this.isEmpty = function () {
        return array.length === 0;
    };
}