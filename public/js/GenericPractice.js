(function() { 
    'use strict';
function Parent(name, religion) {
    this.x = 'CSK Parent';
    this.familyName = name;
    this.familyBelief = religion;
}


Parent.prototype.q = 'Parent\'s Q';


var Child = function (familyName, religion) {
    //Parent.call(this, familyName, religion);
    this.y = 'CSK Child';

};



Child.prototype = new Parent();


var child = new Child('Chengayans', 'Hinduism');
var child2 = new Child('Johnsons', 'Christianity');
syso(child.x);
}());