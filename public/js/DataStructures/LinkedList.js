var Node = function(data){
    this.data = data;
    this.next = null;
}


var LinkedList = function(){
    this.root = null;   
}


LinkedList.prototype.add = function(data) {
    var endNode = new Node(data);
    if( !this.head ){
        this.head = endNode;
    }else{
        var current = this.head;
        
        while( current.next ){
            current = current.next;
        }
        
        current.next = endNode;
    }
    
    return endNode;
}


LinkedList.prototype.printList = function() {
    
        var current = this.head;
        var result = '';
    
        while( current && !current.visited ){
            result += current.data + '->';
            
            current.visited = true;
            current = current.next;
        }  
    
        syso(result);
}

LinkedList.prototype.findIfElementInList = function(value){
    if( this.head.data === value ){
        return true;
    }else{
        var current = this.head.next;
        
        while( current ){
            if( current.data == value )
                return true;
            
            current = current.next;
        }
        
        return false;
           
    }
};



LinkedList.prototype.hasLoop = function(){
    var current = this.head;
    var runner = this.head;
    
    
    while( current && runner ){
        current = current.next;
        if( runner.next == null )
            return false;
        runner = runner.next.next;
        
        if( current.data == runner.data )
            return true;
    }
    
    
    return false;
    
}


LinkedList.prototype.findStartOfLoop = function(){
    var current = this.head;
    var runner = this.head;
    
    
    while( current && runner ){
        current = current.next;
        if( runner.next == null )
            return false;
        runner = runner.next.next;
        
        if( current.data == runner.data )
            break;
    }
    
    
    if( runner == null )
        return -1;
    
    current = this.head;
    
    while( current != runner ){
        current = current.next;
        runner = runner.next;
    }
    
    return current.data;
    
}


var linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
var linkingNode1 = linkedList.add(30);
linkedList.add(40);
var linkingNode2 = linkedList.add(50);

//PRINT LIST
linkedList.printList();

//FIND ELEMENT IN LIST
//syso(linkedList.findIfElementInList(50));



linkingNode2.next = linkingNode1;
syso(linkedList.hasLoop());
syso(linkedList.findStartOfLoop());



