import MenuItems from "../Models/MenuItems.js";

const createMenuItems = async (req, res) => {
    try {
        
             const { menuId } = req.params;
            const { name, description, price } = req.body;

           

            const createMenuItems = new MenuItems({
                menuId, name, description, price
            });


            const newMenuItemsCreated = await createMenuItems.save();
            if (!newMenuItemsCreated) {
                return res.send("menu item is not created");
            }
            res.status(201).json(newMenuItemsCreated);
        
    } catch (error) {
        console.log("something went wrong", error);
        res.status(500).json({ error: 'Failed to create menu items' });
    }
};

const getMenuItems = async(req,res)=>{
    const { menuId } = req.params;

    try {
        const menuItems = await MenuItems.find({menuId})
        res.status(200).json(menuItems);
    } catch (error) {
        console.log("something went wrong", error);
        res.status(500).json({ error: 'Failed to fetch menu items' });
        
    }
  }

 const menuItemsController = {createMenuItems,getMenuItems}
  export default  menuItemsController