import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { RootNavigator } from './src/route';


function App(): JSX.Element {
  return (
    // <SafeAreaView>
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic">
    //     <View>
    <React.Fragment>
      <RootNavigator />
    </React.Fragment>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView >
  );
}



export default App;
