import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
    {
        menuId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        price:{ 
            type: Number,
            required: true },

    },

    { timestamps: true }
);

const MenuItems = mongoose.model("MenuItems", menuItemSchema);

export default MenuItems;