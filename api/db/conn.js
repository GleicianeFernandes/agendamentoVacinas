const mongoose = require("mongoose")

const url = `mongodb+srv://anapaulam410costa2:D00b89Bb@cluster0.zaevm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

async function main(){
    try{
        mongoose.set("strictQuery", true)
        await mongoose.connect(url)
        console.log("Conectado ao banco!")
    } catch(error){
        console.log(`Error: ${error}`)
    }
}

module.exports = main