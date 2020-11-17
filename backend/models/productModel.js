import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    images: { type: String, required: true },
    madein: { type: String, required: true },
    cateID: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    isFreeShip: { type: Boolean, default: false, required: true },
    colors:  [{ type: String, type: String,type: String,type: String, }],
    sizes:  [{ type: String, type: String,type: String,type: String, }],
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

export default Product;
