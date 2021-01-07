const UserStock = require('../models/userStock');
const History = require('../models/transactionHistory');

class UserStockController {

    static read(req,res,next) {
        UserStock.find({})
            .then(stocks => res.status(200).json(stocks))
            .catch(next)
    };

    static readMe(req,res,next) {
        let stockId = req.params.stockId;
        UserStock.findOne({_id: stockId})
            .then(stock => res.status(200).json(stock))
            .catch(next)
    };

    static async create(req,res,next) {
        let user = req.decoded.id;
        let { company, amount, price, order_type } = req.body;
        try {
            let totalStock = Number(amount) * Number(price);
            let { total } = await UserStock.create({company, amount, user, price, order_type, total: totalStock})
            let message = "Stock already buy"
            if (order_type === 'sell') {
                total = 0 - total
                message = "Stock already sell"
            }
            let lastHistory = await History.find({user})
            
            let myAllAssets = lastHistory[lastHistory.length - 1];
            let newAssets;
            newAssets = myAllAssets.assets + total;
            req.assets = {
                assets: newAssets,
                assetCreated: new Date(),
                user    
            }
            next();
        } catch (error) {
            next(error)
        }
    };

};

module.exports = UserStockController;