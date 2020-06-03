const express = require('express') //express module 가지고 오기
const app = express()   // express function을 통해서 새로운 express 생성
const port = 5000 //5000port back server 로 둠
const bodyParser = require('body-parser')
const { User } = require('./models/User')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://eunji:76155Rr^^@boilerplate.gd4cj.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindandModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))


app.get('/', (req, res) => res.send('Hello World!')) // 헬로우 월드 출력되게

//회원 가입을 위한 route
app.post("/register", (req, res) => {
    //회원 가입 할 때 필요한 정보들을 클라이언트에서 가져오면
    //그것들을 데이터베이스에 넣어준다.

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening at localhost:${port}`))








