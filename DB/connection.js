import mongoose from 'mongoose';

const connectDB = async()=>{
    return mongoose.connect(`mongodb://127.0.0.1:27017/newDB`)
    .then(result=>{
        console.log(`connected`)
    }).catch(err=>{
        console.log(`error to connect db ${err}`)
    })
}
export default connectDB;







