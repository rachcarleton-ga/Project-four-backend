const express = require('express')
const Arrived = require('../models/Arrived')
const Goal = require('../models/Goal')
const Journal = require('../models/Journal')

const goalCreate = async (req,res) => {
    let newJournal = await Journal.create(req.body)
    let goal = await Goal.findById(req.params.id)
    newJournal.goal = goal._id
    try {
        await newJournal.save();
        res.json({newJournal})
      } catch (err) {
        res.status(400).json(err);  
      }
    }

    const arrivedCreate = async (req,res) => {
        let newJournal = await Journal.create(req.body)
        let arrived = await Arrived.findById(req.params.id)
        newJournal.arrived = arrived._id
        try {
            await newJournal.save();
            res.json({newJournal})
          } catch (err) {
            res.status(400).json(err);  
          }
        }

const goalShow = async (req, res) => {

    try {
        let goalJournal = await Journal.find({goal:req.params.id})
        res.json({goalJournal})
    } catch (err) {
        res.status(400).json(err);  
    }
}

const arrivedShow = async (req, res) => {

    try {
        let arrivedJournal = await Journal.find({arrived:req.params.id})
        res.json({arrivedJournal})
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
        goalCreate,
        arrivedCreate,
        goalShow,
        arrivedShow,
        delete: deleteJournal
      };