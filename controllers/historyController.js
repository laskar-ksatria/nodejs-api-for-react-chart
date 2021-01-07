const History = require('../models/transactionHistory');

class HistoryController {
    static read(req,res,next) {
        let user = req.decoded.id;
        History.find({user})
            .then(historys => {
                res.status(200).json(historys)
            })
            .catch(err => console.log(err))
    };

    static readMe(req,res,next) {
        let historyId = req.params.historyId;
        History.findOne({_id: historyId})
            .then(history => res.status(200).json(history))
    };

    static create(req,res,next) {
        let Io = req.Io;
        let { assets, assetCreated, user } = req.assets;
        History.create({assets, createdAt: assetCreated, user})
            .then(newHis => {
                let check = req.createCheck;
                if (!check) {
                    res.status(200).json(newHis)
                }
            })
    };



};

module.exports = HistoryController;