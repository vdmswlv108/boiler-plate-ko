const express = require('express') //express module 가지고 오기
const app = express()   // express function을 통해서 새로운 express 생성
const port = 5000 //5000port back server 로 둠

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://eunji:76155Rr^^@boilerplate.gd4cj.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindandModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))


app.get('/', (req, res) => res.send('Hello World!')) // 헬로우 월드 출력되게
app.listen(port, () => console.log(`Example app listening at localhost:${port}`))








