
                                
                                
var ContactApp = new Vue({
el: '#app',
data: {
message: 'Welcome to my App',
note: 'To edit, click on your name and edit it.',
addInput: '',

lists: [],
hasError: false
},

methods:{
addContact: function(){

if(!this.addInput){
    this.hasError = true;
    return;
}

this.hasError = false;

this.lists.push({
    id:this.lists.length+1, 
    title: this.addInput, 
    isComplete: false
});

this.addInput = '';
},

updateContact: function(e, list){
e.preventDefault();
list.title = e.target.innerText;
e.target.blur();
},

del (index) {
// this.arr.splice(index, 1)
this.$delete(this.lists, index)
}

}




});



$(document).ready(function() {
    $('body').css('display', 'none');
    $('body').fadeIn(1000);
});

$(window).ready(function() {
//$('body').fadeIn(1000);
//("window is loaded");
});





