const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactUsSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name Field is Required']
    },

   

    email: {
        type: String,
        required: [true, 'Name Field is Required']
    },

    feedback: {
        type: String,
        required: [true, 'Name Field is Required']
    }
});

var ContactUs = mongoose.model('ContactUs', ContactUsSchema);



module.exports = ContactUs;
