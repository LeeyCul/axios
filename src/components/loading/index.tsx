import React, { memo } from 'react'
import { connect } from 'react-redux'
import { Spin } from 'antd'

import './styles.scss'

interface Props {
    loading: boolean | undefined
}

function Loading(props: Props) {
    const { loading } = props
    let display: string = loading ? 'flex' : 'none'
    return (
        <div>
            <div className="loding_conainer" style={{ display }}>
                <Spin tip="Loading..." size="large"></Spin>
            </div>
        </div>
    )
}

export default connect()(memo(Loading))
