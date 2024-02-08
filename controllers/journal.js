const express = require('express')


const create = async (req,res) => {
    const ride = await Ride.findById(req.params.id)

    ride.reviews.push(req.body)
    try {
        await ride.save();
      } catch (err) {
        res.status(400).json(err);  
      }
    }

const deleteJournal = async(req, res) => {

        Ride.findOne({
          'reviews._id': req.params.id,
        }).then(function (ride) {
          if (!ride) return res.redirect('/rides');
          ride.reviews.remove(req.params.id);
          ride.save().then(function () {
            res.redirect(`/rides/${ride._id}`);
          }).catch(function (err) {
            return next(err);
          });
        });
      }

      module.exports = {
        create,
        delete: deleteJournal
      };