const Company = require('../models/company');

class CompanyController {

    static read(req,res,next) {
        Company.find({})
            .then(companies => {
                res.status(200).json(companies)
            })
            .catch(next)
    };

    static readMe(req,res,next) {
        let companyId = req.params.companyId;
        Company.findOne({_id: companyId})
            .then(company => res.status(200).json(company))
            .catch(next)
    };

    static create(req,res,next) {
        let { name } = req.body;
        Company.create({name})
            .then(company => res.status(200).json(company))
            .catch(next)
    };

};

module.exports = CompanyController;