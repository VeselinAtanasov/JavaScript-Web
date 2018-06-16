
const productApi = require('../api/product.js');
const orderApi = require('../api/order.js');

module.exports = {
    placeGet: async function (req, res) {
        let id = req.params.id;
        try {
            let product = await productApi.getById(id);
            res.render('order/place', product);
        } catch (err) {
            console.log(err);
            res.render('order/place', {
                error: err.message,
            });
        }

    },
    placePost: async function (req, res) {
        let data = req.body;
        console.log(req.user);
        console.log(req.user._id);

        data.creator = req.user._id;
        try {
            let order = await orderApi.createOrder(data);
            res.redirect('/');
        } catch (err) {
            console.log(err);
            res.render('order/place', { error: err.message });
        }
    },
    orderStatus: async (req, res) => {
        let orders = await orderApi.getByUserId(req.user._id);
        orders.map(o => {
            o.dateCreated=o.dateCreated.toISOString();
            o.productName = productApi.getName(o.product.category,o.product.size);
        });
        res.render('order/status',{orders});
    },
    orderDetails: async (req, res) => {
        try{
            console.log(req.params.id)
            const order = await orderApi.getById(req.params.id);
            console.log(order)
            order.productName = productApi.getName(order.product.category,order.product.size);
          
            res.render('order/details',order);
        }catch(err){
            console.log(err);
        }

    }
};