import { store } from '@app/store';
import Theme from '@app/styles';
import Colors from '@app/styles/colors';
import MyApp from '@app/MyApp';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';



function App(): React.JSX.Element {

  const backgroundStyle = {
    backgroundColor: Colors.bg,
  };

  return (
    <SafeAreaView style={Theme.App.container} testID='safe-area-view'>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
        <MyApp testID='my-app' />
      </Provider>
    </SafeAreaView>
  );
}


export default App;