import connectDB from "../../../utils/connectDB";
import Users from "../../../models/userModel";
import Auth from "../../../middleware/auth";
import bcrypt from "bcrypt";

connectDB();

export default async (req, res) => {
    switch (req.method) {
        case 'PATCH':
            await uploadInfor(req, res);
            break;

    }
}

const uploadInfor = async (req, res) => {
    try {
        const result = await Auth(req, res);
        const {name, avatar} = req.body;

        const newUser = await Users.findOneAndUpdate({_id: result.id}, {name, avatar});

        res.json({
            msg: 'Update Success',
           user: {
                name,
               avatar,
               email: newUser.email,
               role: newUser.role
           }
        })
        
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
};