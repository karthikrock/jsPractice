var syso = function(data){
    if( data === undefined ){
        console.log(data);
        return;
    }
    
    
    if( data.constructor === Array && data[0] !== undefined && data[0].constructor === Array ){
        
        for( var i in data ){
            var row = '';
            for( var j in data[i] ){
                row += data[i][j] + ' ';
            }
            console.log(row);
        }
        return;
    }
    console.log(data);
}


window.onerror = function(event) { 
    syso(event);
}