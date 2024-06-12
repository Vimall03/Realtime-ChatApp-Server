const express = require("express");
const { protect } = require("../middleware/authMiddelware");
const {sendMessages} = require("../controllers/messageControllers");

const router = express.Router()

router.route('/').post(protect, sendMessages);
// router.route('/:chatId').post(protect, allMessage);

module.exports=router;