import connectDB from "../../../../utils/connectDB";
import Orders from "../../../../models/orderModel";
import Auth from "../../../../middleware/auth";
import Products from "../../../../models/productModel";

connectDB();

export default async (req, res) => {
    switch (req.method) {
        case "PATCH":
            await deliveredOrder(req, res);
            break;
    }
}

const deliveredOrder = async (req, res) => {
    try {
        const result = await Auth(req, res);
        if (result.role !== 'admin')
        const {id} = req.query;
        const { paymentId } = req.body;

        await Orders.findOneAndUpdate({_id : id}, {
            paid: true,
            dateOfPayment: new Date().toISOString(), paymentId,
            method: 'Paypal'
        });

        res.json({msg: 'Payment Success!'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
};