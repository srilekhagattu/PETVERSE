import mongoose from 'mongoose';
const cartItemSchema = new mongoose.Schema({
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      default: 1,
      min: 1
    },
    description: {
      type: String,
      required: true
    },
    title: {
      type: String,
     
    },
   price : {
      type: Number,
     
    },
    image: {
      type: String,
      required: true
    }
   
  });

  const cartSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true,
      unique: true
    },
    items: [cartItemSchema]
  });

  
  const Cart = mongoose.model('Cart', cartSchema); 

  
  export default Cart