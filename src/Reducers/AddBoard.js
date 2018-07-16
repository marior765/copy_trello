import * as actionTypes from '../Actions/const';

const initialState = {
    board: [],
    string: [],
    name: ''
};

const AddBoard = (state = initialState, action) => {
    switch( action.type ) {
        case actionTypes.ADD_BOARD:
        const newBoard = {
            id: Math.ceil(Math.random() * 100),
            text: action.text
        }
        return {
            ...state,
            board: state.board.concat(newBoard),
            string: []
        }
        case actionTypes.REMOVE_BOARD:
        return {
            ...state,
            board: state.board.filter(brd => brd.id !== action.brdID)
        }
        case actionTypes.EMPTY_FIELD:
        return {
            ...state,
            string: state.string.concat(action.value)
        }
        default:
            return {
                ...state
            };
    }
}

export default AddBoard;