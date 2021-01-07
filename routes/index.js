const express = require('express');
const Router = express.Router();
const { UserAuth } = require('../middlewares/auth');
const UserController = require('../controllers/userController');
const UserStockController = require('../controllers/userStockController');
const CompanyController = require('../controllers/companyController');
const HistoryController = require('../controllers/historyController');

//User
Router.get('/users', UserController.read);
Router.get('/users-me', UserAuth, UserController.readMe);
Router.post('/users', UserController.create, HistoryController.create);
Router.post('/users/login', UserController.login);

//Company
Router.get('/company', CompanyController.read);
Router.get('/company-me/:companyId', CompanyController.readMe);
Router.post('/company', CompanyController.create);

//History
Router.get('/history',UserAuth,HistoryController.read);

//Stock
Router.post('/stock', UserAuth, UserStockController.create, HistoryController.create);
Router.get('/stock', UserStockController.read)


Router.get('/test', (req,res,next) => {
    const User1 = require('../models/user');
    User1.find({})
        .then(users => res.status(200).json(users)) 
})

Router.get('/test2', (req,res,next) => {
    const User1 = require('../models/user');
    User1.deleteMany({}).then(() => res.status(200).json({message: "success"}))
});

// const newCompany = [
//     {
//       _id: 5fa4315ca77c1c0b002aae23,
//       name: 'PT. Angkasa Raya',
//       createdAt: 2020-11-05T17:07:40.661Z,
//       updatedAt: 2020-11-05T17:07:40.661Z
//     },
//     {
//       _id: 5fa4316aa77c1c0b002aae24,
//       name: 'PT. Maju Mundur Oke',
//       createdAt: 2020-11-05T17:07:54.832Z,
//       updatedAt: 2020-11-05T17:07:54.832Z
//     },
//     {
//       _id: 5fa43176a77c1c0b002aae25,
//       name: 'PT. Kicau Merpati',
//       createdAt: 2020-11-05T17:08:06.725Z,
//       updatedAt: 2020-11-05T17:08:06.725Z
//     },
//     {
//       _id: 5fa43185a77c1c0b002aae26,
//       name: 'PT. Terbakar Setengah',
//       createdAt: 2020-11-05T17:08:21.540Z,
//       updatedAt: 2020-11-05T17:08:21.540Z
//     },
//     {
//       _id: 5fa4318fa77c1c0b002aae27,
//       name: 'PT. Jual Obat Kuat',
//       createdAt: 2020-11-05T17:08:31.428Z,
//       updatedAt: 2020-11-05T17:08:31.428Z
//     },
//     {
//       _id: 5fa431a6a77c1c0b002aae28,
//       name: 'PT. Bejo Si Perkutut',
//       createdAt: 2020-11-05T17:08:54.832Z,
//       updatedAt: 2020-11-05T17:08:54.832Z
//     },
//     {
//       _id: 5fa431b4a77c1c0b002aae29,
//       name: 'PT. Begal Jaya Abadi',
//       createdAt: 2020-11-05T17:09:08.989Z,
//       updatedAt: 2020-11-05T17:09:08.989Z
//     },
//     {
//       _id: 5fa431c9a77c1c0b002aae2a,
//       name: 'PT. Loncat-Loncatan',
//       createdAt: 2020-11-05T17:09:29.541Z,
//       updatedAt: 2020-11-05T17:09:29.541Z
//     },
//     {
//       _id: "5fa431d8a77c1c0b002aae2b",
//       name: 'PT. Berakit-rakit Ke Hulu',
//       createdAt: 2020-11-05T17:09:44.244Z,
//       updatedAt: 2020-11-05T17:09:44.244Z
//     }
//   ]

module.exports = Router;