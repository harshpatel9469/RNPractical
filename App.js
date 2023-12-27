import 'react-native-gesture-handler';
import React from 'react';
import {LogBox, Text, View} from 'react-native';
import {persistStore} from 'redux-persist';
import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/es/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import {store} from './src/store';
import NavigatorSwitch from './src/router/Navigator';
import {scale} from 'react-native-size-matters';
import {Colors} from './src/utils/colors';
import CustomToast from './src/component/CustomToast';

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Warning: ...']);

const persistor = persistStore(store);
const toastConfig = {
  tomatoToast: ({text1, props}) => <CustomToast text1={text1} />,
};
function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigatorSwitch />
            <Toast config={toastConfig} />
          </PersistGate>
        </ReduxProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
