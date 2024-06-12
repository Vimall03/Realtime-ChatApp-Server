const expressAsyncHandler = require("express-async-handler");
const Message = require('../Models/messageModal')
  const sendMessages=expressAsyncHandler (async(req, res)=>{
    const {content, chatId } = req.body;

    if(!content || !chatId){
      console.log("Invalid Data passed into the request");
      return res.sendStatus(400);
    }
    var newMessage ={
      sender: req.user._id,
      content: content,
      chat: chatId
    }
    try {
      var message = await Message.create(newMessage)
    } catch (error) {
      
    }
  })

  module.exports = {sendMessages}