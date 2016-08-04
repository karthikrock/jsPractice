var Stack = function (size){
    this.size = size;
    this.currentSize = 0;
    this.top = -1;
    this.array = new Array();
}

Stack.prototype.push = function(data){
    if( this.currentSize == this.size )
        throw "Stack is Full!";
    this.array[++this.top] = data;  
    this.currentSize++;
}


Stack.prototype.pop = function(){
    
    if( this.top == -1 )
        throw "Stack is Empty";
    
    this.currentSize--;
    return this.array[this.top--];
}


Stack.prototype.peek = function(){
    if( this.top == -1 )
        throw "Stack is Empty";
    
    return this.array[this.top];
    
}

Stack.prototype.isEmpty = function(){
    return this.top == -1 ? true : false;   
}

Stack.prototype.isFull = function(){
    return this.currentSize == this.size ? true : false;   
}



try{
var myStack = new Stack(5);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);



while( !myStack.isEmpty() ){
    syso(myStack.pop());
}


    
}catch(e){
    syso(e);
}