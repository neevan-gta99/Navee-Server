import mongoose from "mongoose";
import SKU_Genertor from "../../utils/skuGenerator.js";
import schemaOfVariant from "../../utils/schemaOfProductsVariants.js";

const mensFootwearSchema = new mongoose.Schema({
  sellerID: { type: String },
  productID: { type: String, unique: true },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  gender: { type: String, required: true },
  totalStock:{type: Number, default: 0},  
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  finalPrice: { type: Number },
  isOnSale: { type: Boolean, default: false },
  outerMaterial: { type: String},
  soleMaterial: { type: String },
  closure: { type: String, required: true },
  pattern: { type: String, required: true },
  occasion: { type: String, required: true },
  status: { type: String, default: "Active" },
  variants: [schemaOfVariant.sizeAndVariantsSchema],
  hot: { type: Boolean, default: false },
  sku: {type: String,unique: true},
  images: [
    {
      original: { type: String, required: true },
      optimizeUrl: { type: String, required: true },
      autoCropUrl: { type: String, required: true },
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

mensFootwearSchema.pre("save", async function (next) {
  if (this.price && this.discount) {
    this.finalPrice = this.price - (this.price * this.discount / 100);
  }

  console.log("Schemma mai aaya ");
  
  // Generate SKU only once if it doesn't already exist
  if (!this.sku) {
    this.sku = SKU_Genertor.generateSKUForMenFootWear(
      this.productID,
      this.name,
      this.pattern,
      this.occasion
    );
  }
  next();
});

export const mensFootwearDTO = mongoose.models.mensFootwear || mongoose.model("mensFootwear", mensFootwearSchema);

