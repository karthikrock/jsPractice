var arr = [ -2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArrayIndices(arr){
    var maxIndices = [0, 0];
    var maxSum = arr[0];
    
    var runningSum = arr[0];
    var runningStartIndex = 0;
    var runningEndIndex = 0;
    
    for( var i = 1; i < arr.length; i++ ){
        runningSum += arr[i];
        if( maxSum < 0 && arr[i] > maxSum ){
            runningStartIndex = i;
            runningEndIndex = i;
            maxIndices[0] = runningStartIndex;
            maxIndices[1] = runningEndIndex;
            maxSum = arr[i];
            runningSum = arr[i];
        }else if( runningSum > maxSum ){
            maxSum = runningSum;
            runningEndIndex = i;
            maxIndices[0] = runningStartIndex;
            maxIndices[1] = runningEndIndex;
        }else if( runningSum < 0 ){
            runningSum = 0;
            runningStartIndex = i+1;
            runningEndIndex = i + 1;
        }
    }
    
    syso(maxSum);
    syso(arr.slice(maxIndices[0], maxIndices[1]+1));
    return maxIndices;
    
    
}



syso(maxSubArrayIndices(arr));