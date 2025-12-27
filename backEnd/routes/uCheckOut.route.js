import express from "express";
import uSchema from "../Models/uSchemaCheckOut.model.js";
import mongoose from "mongoose";

const router = express.Router();





router.post('/api/userCheckOut', async (req, res) => {
    try {
        const user = new uSchema({
            name: req.body.name,
            email: req.body.email,
            pNo: req.body.pNo,
            bottleName: req.body.bottleName,
            quantity:req.body.quantity,
            price:req.body.price
        })
        const checkOut = await user.save();
        console.log(req.body);
        res.status(201).json("Sucess!!");

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.post('/api/findOrder', async (req, res) => {
    try {
        let email = req.body.email;
        console.log(email);
        const order = await uSchema.find({
            email: new RegExp(email, 'i')  // 'i' flag makes it case-insensitive
        })
        //  Check if array is empty
        if (order.length === 0) {
            res.status(400).json({ message: "No User Found!!!" })
        }
        res.status(201).json({
            order
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
export default router;