import mongoose from "mongoose";
export const connection = async () => {
  const isConnected = mongoose.connect("mongodb://127.0.0.1:27017/colearnify");
  if(isConnected){
    console.log("connected to mongodb")
  }else{
    console.error("unable to connect to mongodb")
  }
};
