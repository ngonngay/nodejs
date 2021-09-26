const Course=require('../models/Course');
const Mongoose=require('../../util/mongoose')
class SiteController {
    //[GET] /
    index(req,res,next) {
        // res.render('home');
        Course.find({})
            .then(courses => res.render('home',{
                courses:Mongoose.multipleMongooseToObject(courses)
            }))
            .catch(next)
    };
    //[GET] /search
    search(req,res) {
        res.render('search');
    };
}
module.exports = new SiteController;

