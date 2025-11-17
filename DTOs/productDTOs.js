import { bagsDTO } from "../schemas/productsSchema/bagsSchema.js";
import { boysBrandsDTO } from "../schemas/productsSchema/boysBrandsSchema.js";
import { boysWADTO } from "../schemas/productsSchema/boysWASchema.js";
import { girlsGrandsDTO } from "../schemas/productsSchema/girlsGrandsSchema.js";
import { girlsWADTO } from "../schemas/productsSchema/girlsWASchema.js";
import { luggageDTO } from "../schemas/productsSchema/luggageSchema.js";
import { mensBottomwearDTO } from "../schemas/productsSchema/menBottomWearSchema.js";
import { mensFootwearDTO } from "../schemas/productsSchema/menFootWearSchema.js";
import { mensWADTO } from "../schemas/productsSchema/mensWASchema.js";
import { mensTopwearDTO } from "../schemas/productsSchema/menTopWearSchema.js";
import { suitcasesDTO } from "../schemas/productsSchema/suitcasesSchema.js";
import { womensEthnicDTO } from "../schemas/productsSchema/womenEthnicSchema.js";
import { womensFootwearDTO } from "../schemas/productsSchema/womenFootwearSchema.js";
import { womensWADTO } from "../schemas/productsSchema/womensWASchema.js";
import { womensWesternDTO } from "../schemas/productsSchema/womenWesternSchema.js";

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
    gender: body.gender || body.Gender,
    totalStock: body.totalStock,
    variants: body.variants,
    images: uploadedImages,
  });
}

function buildMensBottomwearDTO(body, uploadedImages) {
  return new mensBottomwearDTO({
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
    waistRise: body.waistRise || body.WaistRise,
    status: "Active",
    isOnSale: true,
    hot: false,
    gender: body.gender || body.Gender,
    totalStock: body.totalStock,
    variants: body.variants,
    images: uploadedImages,
  });
}

function buildMensFootwearDTO(body, uploadedImages) {
  console.log("DTO mai");

  return new mensFootwearDTO({
    sellerID: body.sellerID,
    productID: body.productID,
    name: body.name || body.ProductName,
    brand: body.brand || body.BrandName,
    category: body.category || body.Category,
    subCategory: body.subCategory || body.SubCategory,
    price: body.price || body.Price,
    discount: body.discount || body.Discount,
    outerMaterial: body.outerMaterial || body.OuterMaterial,
    soleMaterial: body.soleMaterial || body.SoleMaterial,
    closure: body.closure || body.ClosureType,
    pattern: body.pattern || body.Pattern,
    occasion: body.occasion || body.Occasion,
    status: "Active",
    isOnSale: true,
    hot: false,
    gender: body.gender || body.Gender,
    totalStock: body.totalStock,
    variants: body.variants,
    images: uploadedImages,
  });
}


function buildWomensEthnicDTO(body, uploadedImages) {
  return new womensEthnicDTO({
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
    pattern: body.pattern || body.Pattern,
    status: "Active",
    isOnSale: true,
    hot: false,
    gender: body.gender || body.Gender,
    totalStock: body.totalStock,
    variants: body.variants,
    images: uploadedImages,
  });
}

function buildWomensWesternDTO(body, uploadedImages) {
  return new womensWesternDTO({
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
    pattern: body.pattern || body.Pattern,
    status: "Active",
    isOnSale: true,
    hot: false,
    gender: body.gender,
    totalStock: body.totalStock,
    variants: body.variants,
    images: uploadedImages,
  });
}

function buildWomensFootwearDTO(body, uploadedImages) {
  return new womensFootwearDTO({
    sellerID: body.sellerID,
    productID: body.productID,
    name: body.name || body.ProductName,
    brand: body.brand || body.BrandName,
    category: body.category || body.Category,
    subCategory: body.subCategory || body.SubCategory,
    price: body.price || body.Price,
    discount: body.discount || body.Discount,
    outerMaterial: body.outerMaterial || body.OuterMaterial,
    soleMaterial: body.soleMaterial || body.SoleMaterial,
    closure: body.closure || body.ClosureType,
    heelHeight: body.heelHeight || body.HeelHeight,
    occasion: body.occasion || body.Occasion,
    status: "Active",
    isOnSale: true,
    hot: false,
    gender: body.gender || body.Gender,
    totalStock: body.totalStock,
    variants: body.variants,
    images: uploadedImages,
  });
}

function buildBoysBrandsDTO(body, uploadedImages) {
  return new boysBrandsDTO({
    sellerID: body.sellerID,
    productID: body.productID,
    name: body.name || body.ProductName,
    brand: body.brand || body.BrandName,
    category: body.category || body.Category,
    subCategory: body.subCategory || body.SubCategory,
    subSubCategory: body.subSubCategory || body.SubSubCategory,
    price: body.price || body.Price,
    discount: body.discount || body.Discount,
    material: body.material || body.Material,
    outerMaterial: body.outerMaterial || body.OuterMaterial,
    sleeve: body.sleeve || body.SleeveType,
    neck: body.neck || body.NeckType,
    status: "Active",
    isOnSale: true,
    hot: false,
    gender: body.gender || body.Gender,
    totalStock: body.totalStock,
    variants: body.variants,
    images: uploadedImages,
  });
}

function buildGirlsGrandsDTO(body, uploadedImages) {
  return new girlsGrandsDTO({
    sellerID: body.sellerID,
    productID: body.productID,
    name: body.name || body.ProductName,
    brand: body.brand || body.BrandName,
    category: body.category || body.Category,
    subCategory: body.subCategory || body.SubCategory,
    subSubCategory: body.subSubCategory || body.SubSubCategory,
    price: body.price || body.Price,
    discount: body.discount || body.Discount,
    material: body.material || body.Material,
    outerMaterial: body.outerMaterial || body.OuterMaterial,
    sleeve: body.sleeve || body.SleeveType,
    neck: body.neck || body.NeckType,
    status: "Active",
    isOnSale: true,
    hot: false,
    gender: body.gender || body.Gender,
    totalStock: body.totalStock,
    variants: body.variants,
    images: uploadedImages,
  });
}


function buildMensWADTO(body, uploadedImages) {
  return new mensWADTO({
    sellerID: body.sellerID,
    productID: body.productID,
    name: body.name || body.ProductName,
    brand: body.brand || body.BrandName,
    category: body.category || body.Category,
    subCategory: body.subCategory || body.SubCategory,
    subSubCategory: body.subSubCategory || body.SubSubCategory,
    price: body.price || body.Price,
    discount: body.discount || body.Discount,
    material: body.material || body.Material,
    dialShape: body.dialShape || body.DialShape,
    strapMaterial: body.strapMaterial || body.StrapMaterial,
    movement: body.movement || body.Movement,
    status: "Active",
    isOnSale: true,
    hot: false,
    gender: body.gender || body.Gender,
    totalStock: body.totalStock,
    variants: body.variants,
    images: uploadedImages,
  });
}

function buildWomensWADTO(body, uploadedImages) {
  return new womensWADTO({
    sellerID: body.sellerID,
    productID: body.productID,
    name: body.name || body.ProductName,
    brand: body.brand || body.BrandName,
    category: body.category || body.Category,
    subCategory: body.subCategory || body.SubCategory,
    subSubCategory: body.subSubCategory || body.SubSubCategory,
    price: body.price || body.Price,
    discount: body.discount || body.Discount,
    material: body.material || body.Material,
    dialShape: body.dialShape || body.DialShape,
    strapMaterial: body.strapMaterial || body.StrapMaterial,
    movement: body.movement || body.Movement,
    status: "Active",
    isOnSale: true,
    hot: false,
    gender: body.gender || body.Gender,
    variants: body.variants,
    totalStock: body.totalStock,
    images: uploadedImages,
  });
}

function buildBoysWADTO(body, uploadedImages) {
  return new boysWADTO({
    sellerID: body.sellerID,
    productID: body.productID,
    name: body.name || body.ProductName,
    brand: body.brand || body.BrandName,
    category: body.category || body.Category,
    subCategory: body.subCategory || body.SubCategory,
    subSubCategory: body.subSubCategory || body.SubSubCategory,
    price: body.price || body.Price,
    discount: body.discount || body.Discount,
    material: body.material || body.Material,
    dialShape: body.dialShape || body.DialShape,
    strapMaterial: body.strapMaterial || body.StrapMaterial,
    movement: body.movement || body.Movement,
    status: "Active",
    isOnSale: true,
    hot: false,
    gender: body.gender || body.Gender,
    totalStock: body.totalStock,
    variants: body.variants,
    images: uploadedImages,
  });
}

function buildGirlsWADTO(body, uploadedImages) {
  return new girlsWADTO({
    sellerID: body.sellerID,
    productID: body.productID,
    name: body.name || body.ProductName,
    brand: body.brand || body.BrandName,
    category: body.category || body.Category,
    subCategory: body.subCategory || body.SubCategory,
    subSubCategory: body.subSubCategory || body.SubSubCategory,
    price: body.price || body.Price,
    discount: body.discount || body.Discount,
    material: body.material || body.Material,
    dialShape: body.dialShape || body.DialShape,
    strapMaterial: body.strapMaterial || body.StrapMaterial,
    movement: body.movement || body.Movement,
    status: "Active",
    isOnSale: true,
    hot: false,
    gender: body.gender || body.Gender,
    variants: body.variants,
    totalStock: body.totalStock,
    images: uploadedImages,
  });
}

function buildBagsDTO(body, uploadedImages) {
  return new bagsDTO({
    sellerID: body.sellerID,
    productID: body.productID,
    name: body.name || body.ProductName,
    brand: body.brand || body.BrandName,
    category: body.category || body.Category,
    subCategory: body.subCategory || body.SubCategory,
    price: body.price || body.Price,
    discount: body.discount || body.Discount,
    material: body.material || body.Material,
    capacity: body.capacity || body.Capacity,
    features: body.features || body.Features,
    status: "Active",
    isOnSale: true,
    hot: false,
    gender: body.gender || body.Gender,
    variants: body.variants,
    totalStock: body.totalStock,
    images: uploadedImages,
  });
}

function buildSuitcasesDTO(body, uploadedImages) {
  return new suitcasesDTO({
    sellerID: body.sellerID,
    productID: body.productID,
    name: body.name || body.ProductName,
    brand: body.brand || body.BrandName,
    category: body.category || body.Category,
    subCategory: body.subCategory || body.SubCategory,
    price: body.price || body.Price,
    discount: body.discount || body.Discount,
    material: body.material || body.Material,
    capacity: body.capacity || body.Capacity,
    features: body.features || body.Features,
    shellType: body.shellType,
    numWheels: body.numWheels,
    lockType: body.lockType,
    status: "Active",
    isOnSale: true,
    hot: false,
    gender: body.gender || body.Gender,
    variants: body.variants,
    totalStock: body.totalStock,
    images: uploadedImages,
  });
}


function buildLuggagesDTO(body, uploadedImages) {
  return new luggageDTO({
    sellerID: body.sellerID,
    productID: body.productID,
    name: body.name || body.ProductName,
    brand: body.brand || body.BrandName,
    category: body.category || body.Category,
    subCategory: body.subCategory || body.SubCategory,
    price: body.price || body.Price,
    discount: body.discount || body.Discount,
    material: body.material || body.Material,
    capacity: body.capacity || body.Capacity,
    features: body.features || body.Features,
    numWheels: body.numWheels || body.NumWheels,
    status: "Active",
    isOnSale: true,
    hot: false,
    gender: body.gender || body.Gender,
    variants: body.variants,
    totalStock: body.totalStock,
    images: uploadedImages,
  });
}


const buildDTO = { buildMensTopwearDTO, buildMensBottomwearDTO, buildMensFootwearDTO, buildWomensEthnicDTO, buildWomensWesternDTO, buildWomensFootwearDTO, buildBoysBrandsDTO, buildGirlsGrandsDTO, buildMensWADTO, buildWomensWADTO, buildBoysWADTO, buildGirlsWADTO, buildBagsDTO, buildSuitcasesDTO, buildLuggagesDTO };
export default buildDTO;