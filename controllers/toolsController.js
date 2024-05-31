const { nanoid}  = require('nanoid');
const Sequelize = require('sequelize');
const models = require('../models');


async function addJournal(req, res){
    try {
        const j_id = nanoid(16);
        const m_id = nanoid(16);
        const journal = {
            journal_id:j_id,
            journal_title:req.body.journal_title,
            journal_text: req.body.journal_text,
            user_id: req.params.id
        }

        await models.Journal.create(journal).then(async journal => {
            const mood_log = {
                mood_log_id:m_id,
                journal_id:j_id,
                mood:req.body.mood
            }
            await models.Mood_Log.create(mood_log).then(mood => {
                res.status(201).json({
                    message: "Journal created successfully",
                    result: {
                        journal,
                        mood
                    }
                });
            }).catch(error=>{
                res.status(500).json({
                    message: "Something went wrong",
                    error:error
                });
            })        
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

function getJournals(req, res){
    models.Journal.findAll({where: {user_id:req.params.id}}).then(result =>{
        res.status(200).json({
            journal:result
        });
    }).catch(error =>{
        res.status(500).json({
            message: "Something went wrong",
            error:error
        });
    });
}

module.exports={
    addJournal:addJournal,
    getJournals:getJournals
}