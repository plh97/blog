import axios from 'axios';


/**
 *
 *
 * @export
 * @param {*} mode
 * @returns
 */
export function SetFilterMode(mode){
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: mode
    }
}


/**
 *
 *
 * @export 暴露一个行为
 * @param {*} {id,index,data}
 * @returns 一个 FETCH_START 行为 -> ajax开始 -> 成功 -> 删除资源 -> 失败 -> dispatch FETCH_FAILURE 行为
 */
export function DelResource({id,index,data}){
    return async (dispatch, getState) => {
        dispatch({
            type: fetchTypes.FETCH_START,
        })
        axios({
            url:`http://localhost:3001/agents/${id}`,
            method: 'put',
            data: Object.assign({},data,{
                dialogOpenStatus: undefined,
                resources: data.resources.filter((e,i)=>i!==Number(index))
            })
        }).then(res=>{
            dispatch({
                type: 'DELETE_RESOURCE',
                id, index
            });
        }).catch(err=>{
            dispatch({
                type: fetchTypes.FETCH_FAILURE
            })
        })
    }
}

/**
 *
 *
 * @export
 * @param {*} {id,data}
 * @returns
 */
export function DenyResource({id,data}){
    return async (dispatch, getState) => {
        dispatch({
            type: fetchTypes.FETCH_START,
        })
        axios({
            url:`http://localhost:3001/agents/${id}`,
            method: 'put',
            data: Object.assign({},data,{
                dialogOpenStatus: undefined,
                status: 'idle'
            })
        }).then(res=>{
            dispatch({
                type: 'DENY_RESOURCE',
                id
            });
        }).catch(err=>{
            dispatch({
                type: fetchTypes.FETCH_FAILURE
            })
        })
    }
}



/**
 *
 *
 * @export
 * @param {*} {id,status}
 * @returns
 */
export function ToggleDialog({id,status,data}){
    return {
      type: 'TOGGLE_DIALOG',
      id,status,data
    }
}




/**
 *
 *
 * @export
 * @param {*} {data,id,text}
 * @returns
 */
export function AddResource({data,id,text}){
    return async (dispatch, getState) => {
        dispatch({
            type: fetchTypes.FETCH_START,
        })
        await axios({
            url:`http://localhost:3001/agents/${id}`,
            method: 'put',
            data: Object.assign({},data,{
                dialogOpenStatus: undefined,
                resources: [...data.resources,text]
            })
        }).then(res=>{
            dispatch({
                type: 'ADD_RESOURCE',
                id,text
            });
        }).catch(err=>{
            dispatch({
                type: fetchTypes.FETCH_FAILURE
            })
        })
    }
}



/**
 *
 *
 * @export
 * @param {*} {data}
 * @returns
 */
export function AddAgent({data}){
    return {
      type: 'ADD_AGENT',
      data
    }
}



/**
 *
 *
 * @export
 * @returns
 */
export function FetchNewsTitle() {
    return async (dispatch, getState) => {
        dispatch({
            type: fetchTypes.FETCH_START,
        })
        try {
            const response = await axios.get('http://localhost:3001/agents')
            if (response.status === 200) {
                dispatch({
                    type: fetchTypes.FETCH_SUCCESS,
                    data: response.data.map(e=>Object.assign({},e,{dialogOpenStatus:false})),
                })
            } else {
                throw new Error('fetch failure')
            }
        } catch(e) {
            dispatch({
                type: fetchTypes.FETCH_FAILURE
            })
        }
    }
}



// export const VisibilityFilters = {
//     VISIBLE_ALL: 'VISIBLE_ALL',
//     VISIBLE_PHYSICAL: 'VISIBLE_PHYSICAL',
//     VISIBLE_VIRTUAL: 'VISIBLE_VIRTUAL'
// }


export const fetchTypes = {
    FETCH_START: 'FETCH_START',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
}
