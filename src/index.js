const express = require('express')
require('./db/mongoose')
// const User = require('./models/users')
// const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET request are disabled')
//     }
//     else {
//         next()
//     }
// })

//middleware f() for maintainance mode

// app.use((req,res,next)=>{
//     res.status(503).send('Site is currently down.Check back soon!')
// })

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a Word document'))
//         }

//         cb(undefined, true)
//     }
// })
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })



app.use(express.json())

app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log("Port is up and running on port " + port)
})


// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'this is my new course')
//     console.log(token)

//     const data = jwt.verify(token, 'this is my new course')
//     console.log(data)
// }

// myFunction()


// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5e85c3091a237c43cc8f6841')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5e85c1c50e209e458450c202')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }

// main()