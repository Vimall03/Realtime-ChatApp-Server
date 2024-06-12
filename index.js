const express = require('express');
const dotenv = require('dotenv');
// const { chats } = require('./data/data');
const { connectDB } = require('./config/db');
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const messageRoutes = require('./routes/messageRoutes')
const { errorHandler, notFound } = require('./middleware/errorMiddleware')

dotenv.config();
//connect to database
connectDB(); 
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json()) //to accecpt json data

app.get('/', (req, res) => {
  res.send('Hello From Express')
})

//import from Routes Folder
app.use('/api/user', userRoutes)  
app.use('/api/chat', chatRoutes)  
app.use('/api/message', messageRoutes)  


//Error Handling
app.use(notFound);
app.use(errorHandler)

app.listen(port, () => {
  console.log(`App listening on ${port}`);
})
