const userRoutes = require('./user.routes');
const productRoutes = require('./products.routes');
const cartRoutes = require('./cart.routes');

const ApiRoutes = (app) => {
    app.use("/api/v1/", userRoutes);
    app.use("/api/v1/", productRoutes);
    app.use("/api/v1/", cartRoutes)
}


module.exports = ApiRoutes;