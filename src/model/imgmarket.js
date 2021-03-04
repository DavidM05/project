const mongoose = require('mongoose');
const {Schema} = mongoose;
const path = require('path');



const ImgMarketShema = new schema({
    title: {type: String},
    description : {type: String},
    filename: {type: String}
    
});

ImgMarketShema.virtual('uniqueId')
    .get(function(){
        return this.filename.replace(path.extname(this.filename),'')
    });

module.exports = mongoose.model('image', ImgMarketShema);
