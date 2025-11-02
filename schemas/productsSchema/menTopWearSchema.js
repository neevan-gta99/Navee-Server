import mongoose from "mongoose";
import SKU_Genertor from "../../utils/skuGenerator.js";
import schemaOfVariant from "../../utils/schemaOfProductsVariants.js";

const mensTopwearSchema = new mongoose.Schema({
  sellerID: { type: String, required: true},
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
  material: { type: String, required: true },
  fit: { type: String, required: true },
  sleeve: { type: String, required: true },
  neck: { type: String, required: true },
  status: { type: String, default: "Active" },
  variants: [schemaOfVariant.sizeAndVariantsSchema],
  hot: { type: String },
  // SKU is at the product level, as you requested
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

// The 'pre' save hook is now correct for product-level SKU
mensTopwearSchema.pre("save", async function (next) {
  // Calculate final price
  if (this.price && this.discount) {
    this.finalPrice = this.price - (this.price * this.discount / 100);
  }

  // Generate SKU only once if it doesn't already exist
  if (!this.sku) {
    this.sku = SKU_Genertor.generateSKUForMenTopWear(
      this.productID,
      this.name,
      this.material,
      this.sleeve
    );
  }

  next();
});

export const mensTopwearDTO = mongoose.models.mensTopwear || mongoose.model("mensTopwear", mensTopwearSchema);