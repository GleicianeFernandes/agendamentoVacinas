import mongoose from "mongoose";

export default async ()=>{
    try{
        const connectionString = process.env.DATABASE_CONN_URL

        if(!connectionString) throw new Error("Db connection url has not been defined")

        await mongoose.connect(connectionString)
    }catch(err){
        return console.log(err)
    }
}