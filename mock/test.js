const Mock = require('mockjs')
const express = require('express')
const router = express.Router()

router.use('/pp', function(req, res) {
    console.log(req.body)
    //调用mock方法模拟数据
    const data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [
            {
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1
            }
        ]
    })
    return res.json(data)
})

module.exports = router
