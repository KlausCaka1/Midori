import React, { Component } from 'react';
import { UIManager, View, Text } from 'react-native';
import { Provider } from 'react-redux';

import CreateStore from './models';
import RootContainer from './RootContainer';

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const store = CreateStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootContainer />
            </Provider>
            // <View>
            //     <Text>KOt</Text>
            // </View>
        );
    }
}

export default App;
