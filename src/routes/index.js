const userRoutes = require('./user.routes');
const productRoutes = require('./products.routes');

const ApiRoutes = (app) => {
    app.use("/api/v1/", userRoutes);
    app.use("/api/v1/", productRoutes)
}


module.exports = ApiRoutes;