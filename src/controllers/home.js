const ctrl = {};

const { Image } = require('../model');
const { ImgMarket } = require('../model');

ctrl.index = async (req, res) =>{
    const images = await Image.find().sort({timestamp: -1});
    res.render('index', {images});
};

imgM.index = async (req, res) =>{
    const imgM = await ImgMarket.fin().sort({timestamp: -1});
    res.render('index', {imgM});
}


module.exports = ctrl, imgM;