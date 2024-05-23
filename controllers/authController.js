const { nanoid}  = require('nanoid');
const Sequelize = require('sequelize');
const models = require('../models');

//only to test the connection to the db, might delete later
const addAcount = (req, res) => {
    try {
        const id = nanoid(16);
        const account = {
            account_id:id,
            email:req.body.email,
            password: req.body.email,
            name: req.body.name
        }

        models.Account.create(account).then(result => {
            res.status(201).json({
                message: "Account created successfully",
                result: result
            });
        }).catch(error =>{
            res.status(500).json({
                message: "Something went wrong",
                error:error
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong1",
            error: error
        });
    }
}

//only to test the connection to the db, might delete later
function showAccounts(req, res){
    models.Account.findAll().then(result =>{
        res.status(200).json({
            account:result
        });
    }).catch(error =>{
        res.status(500).json({
            message: "Something went wrong",
            error:error
        });
    });
}

module.exports = {
    addAcount:addAcount,
    showAccounts:showAccounts
}