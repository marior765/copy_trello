import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Actions/const';
import { WrapperWhite, Text } from '../../../Utilits/Style';
import './Classes.css'

const receive = props => {
    return (
        <Link to={`/b/${props.id}`} className='link'>
            <WrapperWhite onClick={() => props.RefText(props.text)}>
                <Text>{props.text}</Text>
            </WrapperWhite>
        </Link>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        RefText: (text) => dispatch({type: actionTypes.REF_TEXT, value: text})
    }
}

export default connect(null, mapDispatchToProps)(receive);