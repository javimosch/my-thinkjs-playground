'use strict';
import moment from 'moment';
import mongoose from 'mongoose';
/**
 * model
 */
export default class extends think.model.mongo {
    
    schema = {
        first_name: {
            required: true
        },
        last_name: {},
        fullname: { //fullname
            default: function() { //combination of first_name and last_name, can not use arrows function
                return this.first_name + this.last_name;
            }
        },
        create_time: { //create time
            default: () => { //get current time
                return moment().format("YYYY-MM-DD HH:mm:ss")
            },
            readonly: true //read only, you can"t change it after added
        }
    }
}