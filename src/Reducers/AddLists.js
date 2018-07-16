import * as actionTypes from '../Actions/const';

const initialState = {
    name: '',
    list: [],
    item: []
}

const AddList = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.REF_TEXT:
        return {
            ...state,
            name: state.name.concat(action.value)

        }
        case actionTypes.CREATE_LIST:
        const listUpload = { text: action.value }
        return {
            ...state,
            list: state.list.concat(listUpload)
        }
        case actionTypes.ADD_ITEM:
        const nameUpload = { name: action.value}
        return {
            ...state,
            item: state.item.concat(nameUpload)
        }
        default:
        return {
            ...state
        }; 

    }
}

export default AddList;