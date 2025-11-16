function sizeVariantsRegex(sizeBlocks) {

  console.log("SizeBlocks",sizeBlocks);
  let malformedBlock = null;

  for (const block of sizeBlocks) {
    const sizeMatch = block.match(/^(.+?)-/);
    if (!sizeMatch) {
      malformedBlock = block;
      break;
    }

    const colorPairs = block.split("-")[1]?.split("/") || [];

    for (const pair of colorPairs) {
      const parts = pair.trim().split("=");
      if (parts.length !== 2 || isNaN(Number(parts[1]))) {
        malformedBlock = block;
        break;
      }
    }

    if (malformedBlock) break;
  }

  if (malformedBlock) {
    console.log(malformedBlock);
    
    console.log("Error Pakdi");
    throw new Error("Invalid Sizes Format Information");
  }
}


const Size_Variant_Regex_Checker = {sizeVariantsRegex};
export default Size_Variant_Regex_Checker;