syso = function(data){
    if( data.constructor === Array && data[0].constructor ){
        
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