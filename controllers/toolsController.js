const { nanoid}  = require('nanoid');
const { Op, fn, col, literal } = require('sequelize');
const models = require('../models');


async function addJournal(req, res){
    try {
        const currentDate = new Date().toISOString().split('T')[0];
        await models.Journal.findOne({
            where: {
                user_id: req.params.id,
                createdAt: {
                    [Op.between]: [`${currentDate} 00:00:00`, `${currentDate} 23:59:59`]
                }
            }
        }).then(async result => {
            if(result){
                return res.status(400).json({
                    result: result,
                    message: "A journal entry for today already exists."
                });
            }
            else{
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
                        return res.status(201).json({
                            message: "Journal created successfully",
                            result: {
                                journal,
                                mood
                            }
                        });
                    }).catch(error=>{
                        return res.status(500).json({
                            message: "Something went wrong",
                            error:error
                        });
                    })        
                }).catch(error =>{
                    return res.status(500).json({
                        message: "Something went wrong",
                        error:error
                    });
                });
            }  
        }).catch( error=> {
            return res.status(500).json({
                message: "Something went wrong",
                error:error
            });
        });       
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong1",
            error: error
        });
    }
}

function getJournals(req, res){
    models.Journal.findAll({where: {user_id:req.params.id}}).then(result =>{
        return res.status(200).json({
            journal:result
        });
    }).catch(error =>{
        return res.status(500).json({
            message: "Something went wrong",
            error:error
        });
    });
}

async function updateJournal(req, res) {
    try{
        const currentDate = new Date().toISOString().split('T')[0];
        const journal = {
            journal_title:req.body.journal_title,
            journal_text: req.body.journal_text,
        }
        await models.Journal.update(journal, {
            where: {
                user_id: req.params.id,
                createdAt: {
                    [Op.between]: [`${currentDate} 00:00:00`, `${currentDate} 23:59:59`]
                }
            }
        }).then(async journal =>{
            const mood_log = {
                mood:req.body.mood
            }
            await models.Mood_Log.update(mood_log, {where:{
                createdAt: {
                    [Op.between]: [`${currentDate} 00:00:00`, `${currentDate} 23:59:59`]
                }
            }}).then(result => {
                return res.status(201).json({
                    message: "Journal updated successfully",
                });
            }).catch(error=>{
                return res.status(500).json({
                    message: "Something went wrong",
                    error:error
                });
            })
        })
    }catch{
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
}

module.exports={
    addJournal:addJournal,
    getJournals:getJournals,
    updateJournal:updateJournal
}