const Mock = require('mockjs')
const express = require('express')
const router = express.Router()
const Random = Mock.Random

router.post('/data', function(req, res) {
    //调用mock方法模拟数据
    const data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [
            {
                'id|+1': 1, // 属性 id 是一个自增数，起始值为 1，每次增 1
                date: '@date("yyyy-MM-dd")', // 日期
                imgherf: Random.image('200x170', `@color()`),
                title: '@ctitle(8, 20)',
                description: '@cparagraph(20, 50)' // @表示随机
            }
        ]
    })
    return res.json(data)
})

router.get('/data1', function(req, res) {
    //调用mock方法模拟数据
    const data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [
            {
                'id|+1': 1, // 属性 id 是一个自增数，起始值为 1，每次增 1
                date: '@date("yyyy-MM-dd")', // 日期
                imgherf: Random.image('200x170', `@color()`),
                title: '@ctitle(8, 20)',
                description: '@cparagraph(20, 50)' // @表示随机
            }
        ]
    })
    return res.json(data)
})

module.exports = router
