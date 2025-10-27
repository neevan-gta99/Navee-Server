import mongoose from "mongoose";
import SKU_Genertor from "../../utils/skuGenerator.js";
import schemaOfVariant from "../../utils/schemaOfProductsVariants.js";

const girlsGrandsSchema = new mongoose.Schema({
  sellerID: { type: String },
  productID: { type: String, unique: true },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  productType: { type: String, required: true },
  subCategory: { type: String, required: true },
  gender: { type: String, required: true },
  totalStock:{type: Number, default: 0},  
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  finalPrice: { type: Number },
  isOnSale: { type: Boolean, default: false },
  material: { type: String },
  outerMaterial: { type: String },
  sleeve: { type: String },
  neck: { type: String },
  status: { type: String, default: "Active" },
  variants: [schemaOfVariant.sizeAndVariantsSchema],
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

girlsGrandsSchema.pre("save", async function (next) {
  if (this.price && this.discount) {
    this.finalPrice = this.price - (this.price * this.discount / 100);
  }

  // Generate SKU only once if it doesn't already exist
  if (!this.sku) {
    let mat;
    if(this.material){
      mat = this.material;
    }
    else{
      mat = this.outerMaterial;
    }
    this.sku = SKU_Genertor.generateSKUForBBdsAndGGds(
      this.productID,
      this.name,
      this.productType,
      mat
    );
  }

  next();
});

export const girlsGrandsDTO = mongoose.models.girlsGrands || mongoose.model("girlsGrands", girlsGrandsSchema);
