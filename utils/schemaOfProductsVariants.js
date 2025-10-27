import mongoose from "mongoose";


const colorAndStockSchema = new mongoose.Schema({
    color: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 1
    },
});

const sizeAndVariantsSchema = new mongoose.Schema({
  size: {
        type: String,
        required: true,
    },
    variants: [colorAndStockSchema],
});

const schemaOfVariant = {sizeAndVariantsSchema};
export default schemaOfVariant;