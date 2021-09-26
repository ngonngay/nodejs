const Course=require('../models/Course');
const Mongoose=require('../../util/mongoose')
class CourseController {
   
    //[GET] /course/:slug
    show(req,res, next) {
       
        Course.findOne({slug:req.params.slug}).then(course => {
            
            res.render('courses/show',{ 
                course:Mongoose.mongooseToObject(course)
            });
        }).catch(next)


    };
    //[GET] /course/create
    create(req,res, next) {
       res.render("courses/create");
    };
    //[GET] /course/:id/edit
    edit(req,res, next) {
        Course.findById(req.params.id)
            .then(course => res.render("courses/edit",{
                course:Mongoose.mongooseToObject(course),
            }))
            .catch(next);
       
    };
    //[PUT] /course/:id
    update(req,res, next) {
      Course.updateOne({_id:req.params.id},req.body)
            .then(()=>res.redirect('/me/stored/courses'))
            .catch(next);
    };
    //[POST] /course/store
    store(req,res, next) {
        const formData =req.body
        formData.image=`https://i.ytimg.com/vi_webp/${req.body.videoId}/maxresdefault.webp`
        const course=new Course(req.body);
        course.save().then(() => res.redirect('/')).catch(err => {

        });
       
    };
}
module.exports = new CourseController;

