import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'

import Loading from './components/loading'
import * as Api from './service'

function App(props: Stores.StoreState) {
    const { loading } = props

    function handleClick1() {
        Api.apiTest1().then(res => {
            console.log('get :', res)
        })
    }

    function handleClick2() {
        Api.apiTest2().then(res => {
            console.log('get :', res)
        })
    }
    function handleClick3() {
        Api.apiTest3({}, { showLoading: false }).then(res => {
            console.log('get :', res)
        })
    }

    function handleClick4() {
        Api.apiTest4({}, { showLoading: false }, '错误提示').then(res => {
            console.log('get :', res)
        })
    }

    return (
        <div className="App">
            <Button onClick={handleClick1}>点击触发请求post</Button>
            <Button onClick={handleClick2}>点击触发请求get</Button>
            <Button onClick={handleClick3}>点击触发请求可控制loading</Button>
            <Button onClick={handleClick4}>点击触发请求可控制错误自定义</Button>
            <Loading loading={loading} />
        </div>
    )
}

export default connect(function mapStateToProps(state: Stores.StoreState) {
    return {
        loading: state.loading
    }
})(App)
