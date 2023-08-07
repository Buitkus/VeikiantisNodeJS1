const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

const {
    getAllAds,
    setAd,
    getUserAds,
    deleteAd
} = require('../controllers/adController');

router.route('/').get(getAllAds).post(protect, setAd);
router.get('/users', protect, getUserAds);
router.delete("/:id", protect, deleteAd)


module.exports = router

