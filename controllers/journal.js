const express = require('express')
const Arrived = require('../models/Arrived')
const Goal = require('../models/Goal')

const create = async (req,res) => {
    const arrived = await Arrived.findById(req.params.id)
    const goal = await Goal.findById(req.params.id)
    arrived.journal.push(req.body)
    goal.journal.push(req.body)
    try {
        await arrived.save();
        await goal.save();
        res.json({arrived, goal})
      } catch (err) {
        res.status(400).json(err);  
      }
    }

const deleteJournal = async(req, res, next) => {
    try {
        const arrived = await Arrived.findOne({
            'journal._id': req.params.id,
        });
        const goal = await Goal.findOne({
            'journal._id': req.params.id,
        })
        if (!arrived) {return res.redirect('/arrived');}
        if (!goal) {return res.redirect('/goal');}
        arrived.journal.remove(req.params.id);
        goal.journal.remove(req.params.id);
        await arrived.save();
        await goal.save();
        res.json({arrived,goal})
    } catch (err){
        next(err)
    }
};

      module.exports = {
        create,
        delete: deleteJournal
      };