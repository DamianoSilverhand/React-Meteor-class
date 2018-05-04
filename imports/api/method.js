import {Meteor} from 'meteor/meteor';

Meteor.methods({
    'printSomething' :(message)=>{
        console.log(`This message is : ${message}`);
        const element = document.getElementById('target');
        element.innerHTML = "This has been called using a method";
        
    },
    'alertsomething': () => {
        console.log("alerting to the client...");     
    }
});