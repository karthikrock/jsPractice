var Queue = function(size){
    this.size = size;
    this.currentSize = 0;
    this.front = -1;
    this.rear = -1;
    
    this.array = new Array();
}

Queue.prototype.enqueue = function (data){
    if( this.currentSize == this.size ){
        throw "Queue is Full!";
    }
    
    if( this.front == -1 )
        this.front = 0;
    
    this.array[++this.rear] = data;
    this.currentSize++;
}

Queue.prototype.dequeue = function (data){
    if( this.currentSize == -1 ){
        throw "Queue is Empty!";
    }
    
    this.currentSize--;
    var result = this.array[this.front];
    if( this.currentSize == 0 ){
        this.front = -1;
        this.rear = -1;
    }else{
        this.front++;
    }
    
    return result;
}

Queue.prototype.isEmpty = function(){
    return this.currentSize == 0 ? true:false;
}

Queue.prototype.isFull = function(){
    return this.currentSize == this.size ? true:false;
}



var queue = new Queue(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);


while( !queue.isEmpty() ){
    syso(queue.dequeue());   
}


