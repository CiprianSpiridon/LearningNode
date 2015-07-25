var logger = function(message){
    console.log("message",message);
};

logger("message1");

function output(message,func){
    func(message);
}

output("a second message",logger);

