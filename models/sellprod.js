import mongoose from 'mongoose';

const sproductSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
    name: {
      type: String,
      required: true
    },
    description :{
      type: String,
      required: true
    },
    pet_category:{
      type: String,
      required: true
    },
    product_category:{
      type: String,
      
    },
    available:{
      type: Number,
      
    },
  
    gender:{
      type:String,
    },
    breed:{
      type:String,
    },
    year:{
      type:Number
    },
    weight:{
      type:Number
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    }
   
  });

  const sProduct = mongoose.model('sProduct', sproductSchema);

  export default sProduct