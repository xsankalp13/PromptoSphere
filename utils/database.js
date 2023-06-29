import mongoose from 'mongoose';

let isConnect = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery',true);
    if(isConnect){
        console.log("MongoDB is connected");
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology:true,

        })
        isConnect = true;
        console.log("MongoDB is now connected ");
    } catch (error) {
        console.log(error);
    }
}