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
function generateSKUForWomenWestern(productID, name, material, pattern) {
  const nameCode = name.replace(/\s+/g, '').toUpperCase().slice(0, 5);
  const materialCode = material.toUpperCase();
  // Correcting the syntax here
  const patternCode = pattern.toUpperCase();
  return `${productID}-${nameCode}-${materialCode}-${patternCode}`;
}
function generateSKUForWomenFootwear(productID, name, outerMaterial, occasion) {
  const nameCode = name.replace(/\s+/g, '').toUpperCase().slice(0, 5);
  const outerMaterialCode = outerMaterial.toUpperCase();
  // Correcting the syntax here
  const occasionCode = occasion.toUpperCase();
  return `${productID}-${nameCode}-${outerMaterialCode}-${occasionCode}`;
}
function generateSKUForBBdsAndGGds(productID, name, productType, mat) {
  const nameCode = name.replace(/\s+/g, '').toUpperCase().slice(0, 5);
  const productTypeCode = productType.toUpperCase();
  // Correcting the syntax here
  const matCode = mat.toUpperCase();
  return `${productID}-${nameCode}-${matCode}-${productTypeCode}`;
}
function generateSKUforWatchesAndAccessories(productID, name, productType, mat) {
  const nameCode = name.replace(/\s+/g, '').toUpperCase().slice(0, 5);
  const productTypeCode = productType.toUpperCase();
  const matCode = mat.toUpperCase();
  return `${productID}-${nameCode}-${productTypeCode}-${matCode}`;
}
function generateSKUforBSL(productID, name, material, capacity) {
  const nameCode = name.replace(/\s+/g, '').toUpperCase().slice(0, 5);
  const materialCode = material.toUpperCase();
  const capacityCode = capacity.toUpperCase();
  return `${productID}-${nameCode}-${materialCode}-${capacityCode}`;
}

const SKU_Genertor = { generateSKUForMenTopWear, generateSKUForMenBottomWear, generateSKUForMenFootWear, generateSKUForWomenEthnic,generateSKUForWomenWestern,generateSKUForWomenFootwear,generateSKUForBBdsAndGGds, generateSKUforBSL, generateSKUforWatchesAndAccessories };
export default SKU_Genertor;