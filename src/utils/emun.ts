import _ from 'lodash'
import store from '../store/index'
import { actions } from '../store/actions'

let needLoadingRequestCount: number = 0
const tryCloseLoading = () => {
    if (needLoadingRequestCount === 0) {
        store.dispatch(actions.setLoading(false))
    }
}

/**
 * 开启加载动画
 */

export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        store.dispatch(actions.setLoading(true))
    }
    needLoadingRequestCount++
}

/**
 * 关闭加载动画
 */
export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        _.debounce(tryCloseLoading, 300)()
    }
}

/**
 * 过滤参数，过滤空字符串
 * */
export function paramFilter(params: any): object {
    let result: any = {}
    for (let k in params) {
        if (params[k] !== '' && params[k] !== undefined && params[k] !== null) {
            // result[k] = window.encodeURIComponent(params[k]);
            result[k] = params[k]
        }
    }
    return result
}
