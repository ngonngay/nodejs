const Course=require('../models/Course');
const Mongoose=require('../../util/mongoose')
class MeController {
   
    //[GET] /me/stored/courses
    storedCourse(req,res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses',{
                courses: Mongoose.multipleMongooseToObject(courses)
            }))
            .catch(next);
    };
}
module.exports = new MeController;

