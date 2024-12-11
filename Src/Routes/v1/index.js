import express from "express"
import menuController from "../../Controllers/menuController.js";
import menuItemsController from "../../Controllers/menuItemsController.js";
const v1Router= express.Router()

v1Router.get("/",(req,res)=>{
    console.log("hello world")
    res.send("hi you are in v1 endpoint");

})
v1Router.post("/add-menu",menuController.createMenu)
v1Router.get("/get-menu",menuController.getMenu)
v1Router.post("/menus/:menuId/items",menuItemsController.createMenuItems)
v1Router.get("/menus/:menuId/items",menuItemsController.getMenuItems)
export default v1Router 