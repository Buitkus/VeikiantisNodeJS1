const Ad = require('../models/Ad');
const asyncHandler = require('express-async-handler');

// @desc Get All Ads info
// @route GET /api/ad
// @access PUBLIC

const getAllAds = asyncHandler(async (req, res) => {
    const ads = await Ad.find();
    res.status(200).send(ads);
})


// @desc Set new Ad
// @route POST /api/ad
// @access PRIVAT (simple user)

const setAd = asyncHandler(async (req, res) => {
    const { name, description, image, price, category } = req.body
    if (!name || !description || !image || !price || !category) {
      res.status(400)
      throw new Error('Please add all fields')
    }

    const ad = await Ad.create({
      name,
      description,
      image,
      price,
      category,
      user: req.user.id
    })
    if (ad) {
      res.status(201).send(ad)
    } else {
      res.status(400)
      throw new Error('Invalid data')
    }
  })

// @desc Get user ads
// @route GET /api/ad/users
// @access PRIVAT

const getUserAds = asyncHandler(async (req, res) => {
    const ads = await Ad.find({user: req.user.id});
    res.status(200).send(ads);
})


// @desc delete ad
// @route DELETE /api/ad/:id
// @access Not private

const deleteAd = asyncHandler(async (req, res) => {
  const ad = await Ad.deleteOne({ _id: req.params.id });
  res.status(200).send(ad);
});



module.exports = {
    getAllAds,
    setAd,
    getUserAds,
    deleteAd
}