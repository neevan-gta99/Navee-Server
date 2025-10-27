import seller_profile_Model from '../models/sellerModel.js'

export const getSeller = async (req, res) => {

    try {
        console.log(req.query); // Log query parameters
        const resp = await seller_profile_Model.getSeller(req);
        res.status(resp.code).json(resp.message);
    } catch {
        res.status(500).json({ error: "Server Error profilecontroller" });
    }
};






