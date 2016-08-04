var matrix = [[1,2,3], [4,5,6], [7,8,9]];

function rotateMatrix(matrix){
    var n = matrix.length;
    
    for( var layer = 0; layer < n/2; layer++ ){
        var first = layer;
        var last = n - 1 - first;
        
        for( var i = first; i < last; i++){
            var offset = i - first;
            
            var temp = matrix[first][i];
            matrix[first][i] = matrix[last-offset][first];
            matrix[last-offset][first] = matrix[last][last-offset];
            matrix[last][last-offset] = matrix[i][last];
            matrix[i][last] = temp;
            
        }
        
    }


}
