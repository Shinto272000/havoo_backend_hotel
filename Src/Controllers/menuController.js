import Menu from "../Models/Menu.js";

const createMenu = async (req, res) => {
    try {
        

            const { name, description } = req.body;

           

            const createMenu = new Menu({
                name, description
            });


            const newMenuCreated = await createMenu.save();
            if (!newMenuCreated) {
                return res.send("menu is not created");
            }
            res.status(201).json(newMenuCreated);
        
    } catch (error) {
        console.log("something went wrong", error);
        res.status(500).json({ error: 'Failed to create menu' });
    }
};

const getMenu = async(req,res)=>{

    try {
        const menu = await Menu.find()
        res.status(200).json(menu);
    } catch (error) {
        console.log("something went wrong", error);
        res.status(500).json({ error: 'Failed to fetch menus' });
        
    }
  }

 const menuController = {createMenu,getMenu}
  export default  menuController