const mongoose = require("mongoose")

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        //Trong f8 thì connect như sau:
        // await mongoose.connect('mongodb://localhost/my_database'){
        //     useNewUrlParser:true, 
        //     useUnifiedTopology:true
        // };
        console.log("connect successfully");
    } catch (error) {
        console.log("connect fail");
    }
}
module.exports = {connect};