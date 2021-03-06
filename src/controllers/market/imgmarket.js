const path = require('path');
const { randomNumber } = require('../../helpers/libs');
const fs = require('fs-extra');

const { ImgMarket } = require('../../model');

const imgM = {};

imgM.index = (req, res) => {

};

imgM.create = (req, res) => {
    const saveImgMarket = async ()=> {
        const imgUrl = randomNumber();
        const images = ImgMarket.find({filename: imgUrl});
        if(images.length > 0){
            imgUrl = randomNumber();
            saveImgMarket();
        }else{
            console.log(imageUrl);
            const imageTempPath = req.file.path;
            const ext = path.extname(req.file.originalname).toLocaleLowerCase();
            const targetPath = path.resolve(`src/public/imgmarket/${imgUrl}${ext}`)

            if (ext === '.png' || ext === '.jpg' || ext === '.jpeg'){
                await fs.rename(imageTempPath, targetPath);
                const newImgM = new ImgMarket({
                    title: req.body.title,
                    filename: imgUrl + ext,
                    description: req.body.description
                });
                const imgMadd = await newImgM.save();


            }else{
                await
            }
        }
    }
};