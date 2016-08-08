function maxImagesViewed(arr, cost) {

    var count = 0;
    var curIndex = 0;

    var viewed = [];
    arr.forEach(function(item) {
        viewed.push(false);
    });


    
    var runningStartIndex = -1;
    var runningEndIndex = -1;

    var direction = 0;
    while (cost > 0) {
        curIndex = curIndex % (arr.length);
        if (getViewingCost(arr[curIndex], viewed[curIndex]) >= 0) {
            count++;

            if (runningStartIndex < 0 && arr[curIndex] == 'P') {
                runningStartIndex = curIndex;
            } else if (runningStartIndex >= 0 && (curIndex - runningStartIndex) + 1 >= 2 && arr[curIndex] == 'P') {
                runningEndIndex = curIndex;
            }


            cost -= getViewingCost(arr[curIndex], viewed[curIndex]);
            viewed[curIndex] = true;
        } else {
            break;
        }

        if (((runningEndIndex - runningStartIndex) + 1) >= 2) {
            if (direction == 0 && (curIndex == arr.length || (curIndex + 1 < arr.length && arr[curIndex + 1] == 'L'))) {
                curIndex--;
                direction == 1;
            } else if (direction == 1 && (curIndex == 0 || (curIndex > 0 && arr[curIndex - 1] == 'L'))) {
                curIndex++;
                direction == 0;
            } else {

                curIndex = direction == 0 ? curIndex - 1 : curIndex + 1;
                direction = direction == 0 ? 1 : 0;

            }
        } else {
            curIndex++;
        }
    }

    return count;
}


function getViewingCost(value, wasViewed) {
    if (value == 'L')
        return 2 + (wasViewed ? 0 : 1);
    else if (value == 'P')
        return 1 + (wasViewed ? 0 : 1);
}


var inputArray = 'LPPPLPPP'.split('');

syso(maxImagesViewed(inputArray, 20));