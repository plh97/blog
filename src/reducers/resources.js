const initialState = {
  mode: 'all',
  fetchStatus: 'FETCH_START',
  data: []
}


/**
 *
 *
 * @export    reducer
 * @param     {*} [state=initialState]
 * @param     {*} action
 * @returns
 */
export default function (state=initialState, action) {
  const {
    type,
    filter,
    data,
    id,
    text,
    index,
    status
  } = action;
  switch (type) {
    case "SET_VISIBILITY_FILTER":
      return Object.assign({}, state, {
        mode: filter,
      })
    case "FETCH_SUCCESS":
      return Object.assign({}, state, {
        data: data
      })
    case "DELETE_RESOURCE":
      return Object.assign({}, state, {
        data: state.data.map((e,i)=>{
          if(String(e.id)===String(id)){
            return Object.assign({},e,{
              resources: e.resources.filter((e,i)=>String(i)!==String(index))
            })
          }else{
            return e
          }
        })
      })
    case "DENY_RESOURCE":
      return Object.assign({}, state, {
        data: state.data.map(e=>{
          if(String(e.id) === String(id)){
            return Object.assign({},e,{status: 'idle'})
          }
          return e;
        })
      })
    case "TOGGLE_DIALOG":      
      return Object.assign({},state, {
        data: state.data.map( e => {
          if(String(e.id) === String(id)){
            return Object.assign({},e,{dialogOpenStatus: status})
          } else {
            return Object.assign({},e,{dialogOpenStatus: false})
          }
        })
      })
    case "ADD_RESOURCE":
      return Object.assign({},state,{
        data: state.data.map( e => {
          if(String(e.id) === String(id)){
            return Object.assign({},e,{resources: [...e.resources,text]})
          }
          return e;
        })
      })
    case "ADD_AGENT":
      return Object.assign({},state,{
        data: [action.data,...state.data] 
      })
    default:
      return state
  }
}

