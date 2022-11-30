
//exports function so it is usable in app.js
exports.getDate =function(){
var today = new Date();

const options = { 
    weekday: 'long', 
    //year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
};

return today.toLocaleDateString("en-US", options); //convets varible today to a string for current date. 

}
exports.getDay=function(){
    var today = new Date();
    
    const options = { 
        weekday: 'long', 

    };
    
    return today.toLocaleDateString("en-US", options); //convets varible today to a string for current date. 
    
    }
