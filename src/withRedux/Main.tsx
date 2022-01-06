import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
    incrementAction,
    decreaseAction,
} from './actions';

interface Prop {
    value?: any;
    incrementAction: any;
    decreaseAction: any;
}

class Page extends PureComponent<Prop> {
    render() {
        const { value, incrementAction, decreaseAction } = this.props;
        return (
            <div>
                <h1>{value}</h1>
                <button onClick={incrementAction}>increment</button>
                <button onClick={decreaseAction}>decrease</button>
            </div>
        );
    }
}


const mapStateToProps = (state: { value: any; }) => ({
    value: state.value,
});

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
    incrementAction: () => dispatch(incrementAction()),
    decreaseAction: () => dispatch(decreaseAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
