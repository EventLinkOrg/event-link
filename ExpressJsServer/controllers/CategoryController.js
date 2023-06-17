const Category = require('../models/Category')

const CategoryController = async (req, res)=> {
    try{
        if(req.body.category){
              
                await Category.create(req.body.category)
                console.log("Category has been created!");
            
        }
    }catch(err){
        err.message();
    }
}