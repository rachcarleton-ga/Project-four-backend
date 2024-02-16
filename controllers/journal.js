const express = require('express')
const Arrived = require('../models/Arrived')
const Goal = require('../models/Goal')
const Journal = require('../models/Journal')

const goalCreate = async (req, res) => {
    let newJournal = await Journal.create(req.body)
    let goal = await Goal.findById(req.params.id)
    try {
        newJournal.goal = goal._id
        await newJournal.save();
        res.json({ newJournal })
    } catch (err) {
        res.status(400).json(err);
    }
}

const arrivedCreate = async (req, res) => {
    let newJournal = await Journal.create(req.body)
    let arrived = await Arrived.findById(req.params.id)
    try {
        newJournal.arrived = arrived._id
        await newJournal.save();
        res.json({ newJournal })
    } catch (err) {
        res.status(400).json(err);
    }
}

const goalShow = async (req, res) => {
    try {
        let goalJournal = await Journal.find({ goal: req.params.id })
        res.json({ goalJournal })
    } catch (err) {
        res.status(400).json(err);
    }
}

const arrivedShow = async (req, res) => {
    try {
        let arrivedJournal = await Journal.find({ arrived: req.params.id })
        res.json({ arrivedJournal })
    } catch (err) {
        res.status(400).json(err);
    }
}

const goalEdit = async (req, res) => {
    console.log("apple")
    try {
        let updatedJournal = await Journal.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json({ updatedJournal })
    } catch (err) {
        res.status(400).json(err);
    }
}

const arrivedEdit = async (req, res) => {
    console.log("banana")
    try {
        console.log(req.body)
        let updatedJournal = await Journal.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json({ updatedJournal })
    } catch (err) {
        res.status(400).json(err);
    }
}

const goalDelete = async (req, res, next) => {
    try {
        const journal = await Journal.findByIdAndDelete(req.params.id);
        if (!journal) {
            return res.status(400).json({ error: "Journal entry not found for the provided ID." });
        }
        res.json({ message: "Journal entry deleted successfully." });
    } catch (err) {
        next(err);
    }
};

const arrivedDelete = async (req, res, next) => {
    try {
        const journal = await Journal.findByIdAndDelete(req.params.id);
        if (!journal) {
            return res.status(400).json({ error: "Journal entry not found for the provided ID." });
        }
        res.json({ message: "Journal entry deleted successfully." });
    } catch (err) {
        next(err);
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