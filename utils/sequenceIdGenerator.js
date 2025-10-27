import { Counter } from "../schemas/counterSchema.js";

const getNextId = async (prefix, category) => {
  const existing = await Counter.findOne({ category });

  if (!existing) {
    // Category not found — create with seq = 1
    const newCounter = await Counter.create({ category, seq: 1 });
    return `${prefix}${String(newCounter.seq).padStart(2, "0")}`;
  }

  // Category exists — increment seq
  const updated = await Counter.findOneAndUpdate(
    { category },
    { $inc: { seq: 1 } },
    { new: true }
  );

  return `${prefix}${String(updated.seq).padStart(2, "0")}`;
};

const ID_Generator = { getNextId };
export default ID_Generator;