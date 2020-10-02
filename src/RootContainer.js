import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import AppNavigation from './navigation/index';
import StartupActions from './models/startup';

import { navigationRef } from './utils/navigation';

class RootContainer extends Component {
    componentDidMount() {
        this.props.dispatch(StartupActions.startup());
    }

    render() {
        return (
            <React.Fragment>
                <StatusBar barStyle="light-content"/>
                <AppNavigation/>
            </React.Fragment>
        );
    }
}

export default connect()(RootContainer);
