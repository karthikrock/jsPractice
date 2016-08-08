var arr = [1,2,3,5,8,7,6,9,5,7,3,0,5];
var subArray = [5,7];



function findMinSubArrayWithElems(arr, subArr){
    var runningStartingIndex = -1;
    var runningEndingIndex = -1;
    
    var minLength = Number.MAX_VALUE;
    
    var minIndices = [-1, -1];
    
    var subArrPtr = 0;
    for( var i = 0; i < arr.length; i++ ){
        if( runningStartingIndex < 0 && arr[i] == subArr[subArrPtr] ){
            runningStartingIndex = i;
            subArrPtr++;
        }else if(runningStartingIndex > -1 && subArrPtr == subArr.length-1 && arr[i] == subArr[subArrPtr]){
            runningEndingIndex = i;
            if(( (runningEndingIndex - runningStartingIndex) + 1 ) < minLength ){
                minIndices[0] = runningStartingIndex;
                minIndices[1] = runningEndingIndex;
                minLength =  (runningEndingIndex - runningStartingIndex) + 1;
                
                subArrPtr = 0;
                runningStartingIndex = -1;
                runningEndingIndex = -1;
                
            }
        }else if( subArrPtr < subArr.length && arr[i] == subArr[subArrPtr] ){
            runningEndingIndex = i;
            subArrPtr++;  
        }
    }
    
    syso(minLength);
    return minIndices;
}



var res = findMinSubArrayWithElems(arr,subArray);
syso(res);