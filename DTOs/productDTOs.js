import { mensTopwearDTO } from "../schemas/productsSchema/menTopWearSchema.js";

function buildMensTopwearDTO(body, uploadedImages) {
  return new mensTopwearDTO({
    sellerID: body.sellerID,
    productID: body.productID,
    name: body.name || body.ProductName,
    brand: body.brand || body.BrandName,
    category: body.category || body.Category,
    subCategory: body.subCategory || body.SubCategory,
    price: body.price || body.Price,
    discount: body.discount || body.Discount,
    material: body.material || body.Material,
    fit: body.fit || body.FitType,
    sleeve: body.sleeve || body.SleeveType,
    neck: body.neck || body.NeckType,
    status: "Active",
    isOnSale: true,
    hot: false,
    gender: body.gender,
    totalStock: body.totalStock,
    variants: body.variants,
    images: uploadedImages,
  });
}

const buildDTO = { buildMensTopwearDTO };
export default buildDTO;