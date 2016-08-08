var matrix = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];


function alternatingPrint(matrix){
    var result = [];
    
    var direction = 0;
    
    for( var i = 0; i < matrix.length; i++ ){
     for( var j = 0; j < matrix[0].length; j++ ){
         var row = i;
         var column = 0;
         if( direction == 0 ){
            column = j; 
         }else{
            column = matrix[0].length - 1 - j;
         }
         
         result.push(matrix[row][column]);
         
     }
        direction = direction == 0 ? 1 : 0;
    }
    
    return result;
    

}




syso(alternatingPrint(matrix));