import {Meteor} from 'meteor/meteor';
import moment from 'moment';
import '/imports/api/method.js';
import '/imports/api/blog/methods.js';




const date = moment(new Date()).format('YYYY-MM-DD');
console.log(`Today's date is ${date}`);
