import mongoose from 'mongoose';


const adminSchema = new mongoose.Schema({

    adminId: {
        type: String,
        unique: true,
    },

    password: { type: String, required: true },

    fullName: { type: String, required: true, trim: true },

})

const adminDTO = mongoose.models.Admin || mongoose.model('Admin', adminSchema);
export default adminDTO;