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

const goalEdit = async (req, res) => {
    try {
        let updatedJournal = await Journal.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json({updatedJournal})
    } catch (err) {
        res.status(400).json(err);  
    }
}

const arrivedEdit = async (req, res) => {
    try {
        let updatedJournal = await Journal.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json({updatedJournal})
    } catch (err) {
        res.status(400).json(err);  
    }
}

const goalDelete = async(req, res, next) => {
    try {
        const goal = await Goal.findOne({
            'journal._id': req.params.id,
        })
        if (!goal) {return res.redirect('/goal');}
        goal.journal.remove(req.params.id);
        await goal.save();
        res.json({goal})
    } catch (err){
        next(err)
    }
};

const arrivedDelete = async(req, res, next) => {
    try {
        const arrived = await Arrived.findOne({
            'journal._id': req.params.id,
        });
        if (!arrived) {return res.redirect('/arrived');}
        arrived.journal.remove(req.params.id);
        await arrived.save();
        res.json({goal})
    } catch (err){
        next(err)
    }
};
      module.exports = {
        goalCreate,
        arrivedCreate,
        goalShow,
        arrivedShow,
        goalEdit,
        arrivedEdit,
        goalDelete,
        arrivedDelete
      };