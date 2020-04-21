const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json()) //body-parser 解析json格式数据
app.use(
    bodyParser.urlencoded({
        //此项必须在 bodyParser.json 下面,为参数编码
        extended: true
    })
)

const router = express.Router()

router.use('/', require('./test'))
router.use('/', require('./data'))
app.use('/api', router)

app.listen(8090)
