import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import action from '../../actions/index';
import NumberComponent from '../../components/number/number';
import AlertComponent from '../../components/alert/alert';
import FetchDataComponent from '../../components/fetchData/fetchData';
import './sample.pcss';

class Sample extends Component {

    handleClickAdd = () => {
        this.props.incrementNum();
    };

    handleClickMinux = () => {
        this.props.decrementNum();
    };

    handleClickClear = () => {
        this.props.clearNum();
    };

    handleClickAlert = () => {
        this.props.toggleAlert();
    };

    handleClickFetchData = () => {
        // this.props.toggleAlert();
    };

    render() {
        const {
            number,
            showAlert,
        } = this.props;

        return (
            <div className="wrap">
                <h3>recat redux async</h3>
                <NumberComponent
                    value={number}
                    handleClickAdd={this.handleClickAdd}
                    handleClickMinux={this.handleClickMinux}
                    handleClickClear={this.handleClickClear}
                />
                <AlertComponent
                    showAlert={showAlert}
                    handleClickAlert={this.handleClickAlert}
                />
                <FetchDataComponent
                    showloading={false}
                    handleClickFetchData={this.handleClickFetchData}
                />
            </div>
        );
    }
}

export default connect((state) => {
    console.log('connect state: ', state);
    return {
        number: state.changeNumber.number,
        showAlert: state.toggleAlert.showAlert,
    };
}, {
    incrementNum: action.number.incrementNum,
    decrementNum: action.number.decrementNum,
    clearNum: action.number.clearNum,
    toggleAlert: action.alert.toggleAlert,
})(Sample);
