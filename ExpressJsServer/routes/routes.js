const CategoryController = require('../controllers/CategoryController.js')



const routes =  function (app){
    const route  = [
        ['/category', CategoryController
    ],
    ]

    route.forEach((item)=>{
        const [route, controller] = item;
        app.use(`/${route}`, controller)
    })
}

module.exports = routes;