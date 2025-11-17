function generateSKUForMenTopWear(productID, name, material, sleeve) {
  const nameCode = name.replace(/\s+/g, '').toUpperCase().slice(0, 5);
  const materialCode = material.toUpperCase();
  // Correcting the syntax here
  const sleeveCode = sleeve.toUpperCase().split(" ")[0];
  return `${productID}-${nameCode}-${materialCode}-${sleeveCode}`;
}
function generateSKUForMenBottomWear(productID, name, material, waistRise) {
  const nameCode = name.replace(/\s+/g, '').toUpperCase().slice(0, 5);
  const materialCode = material.toUpperCase();
  // Correcting the syntax here
  const waistRiseCode = waistRise.toUpperCase().split(" ")[0];
  return `${productID}-${nameCode}-${materialCode}-${waistRiseCode}`;
}
function generateSKUForMenFootWear(productID, name, pattern, occasion) {
  const nameCode = name.replace(/\s+/g, '').toUpperCase().slice(0, 5);
  const patternCode = pattern.toUpperCase();
  // Correcting the syntax here
  const occasionCode = occasion.toUpperCase();
  return `${productID}-${nameCode}-${patternCode}-${occasionCode}`;
}
function generateSKUForWomenEthnic(productID, name, material, fit) {
  const nameCode = name.replace(/\s+/g, '').toUpperCase().slice(0, 5);
  const materialCode = material.toUpperCase();
  // Correcting the syntax here
  const fitCode = fit.toUpperCase();
  return `${productID}-${nameCode}-${materialCode}-${fitCode}`;
}
function generateSKUForWomenWestern(productID, name, subCategory, material) {
  const nameCode = name.replace(/\s+/g, '').toUpperCase().slice(0, 5);
  const materialCode = material.toUpperCase();
  // Correcting the syntax here
  const subCategoryCode = subCategory.toUpperCase();
  return `${productID}-${nameCode}-${subCategoryCode}-${materialCode}`;
}
function generateSKUForWomenFootwear(productID, name, subCategory, occasion) {
  const nameCode = name.replace(/\s+/g, '').toUpperCase().slice(0, 5);
  const subCategoryCode = subCategory.toUpperCase();
  
  const occasionCode = occasion.toUpperCase();

  console.log("yaha dikkat hai");
  
  return `${productID}-${nameCode}-${subCategoryCode}-${occasionCode}`;
}
function generateSKUForBBdsAndGGds(productID, name, subCategory, mat) {
  const nameCode = name.replace(/\s+/g, '').toUpperCase().slice(0, 5);
  const subCategoryCode = subCategory.toUpperCase();
  // Correcting the syntax here
  const matCode = mat.toUpperCase();
  return `${productID}-${nameCode}-${matCode}-${subCategoryCode}`;
}
function generateSKUforWatchesAndAccessories(productID, name, subCategory, mat) {
  const nameCode = name.replace(/\s+/g, '').toUpperCase().slice(0, 5);
  const subCategoryCode = subCategory.toUpperCase();
  const matCode = mat.toUpperCase();
  return `${productID}-${nameCode}-${subCategoryCode}-${matCode}`;
}
function generateSKUforBSL(productID, name, material, capacity) {
  const nameCode = name.replace(/\s+/g, '').toUpperCase().slice(0, 5);
  const materialCode = material.toUpperCase();
  const capacityCode = capacity.toUpperCase();
  return `${productID}-${nameCode}-${materialCode}-${capacityCode}`;
}

const SKU_Genertor = { generateSKUForMenTopWear, generateSKUForMenBottomWear, generateSKUForMenFootWear, generateSKUForWomenEthnic,generateSKUForWomenWestern,generateSKUForWomenFootwear,generateSKUForBBdsAndGGds, generateSKUforBSL, generateSKUforWatchesAndAccessories };
export default SKU_Genertor;