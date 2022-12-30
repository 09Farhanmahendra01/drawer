import React, {useRef} from 'react';
import {Button} from 'react-native';
import {View, Text, DrawerLayoutAndroid} from 'react-native';
import Router from './router';
const App = () => {
  const drawer = useRef(null);
  const componentDrawer = () => {
    return (
      <View
        style={{
          flex: 1,
          width: 330,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          title="Close Drawer"
          onPress={() => drawer.current.closeDrawer()}
        />
      </View>
    );
  };
  return (
    // Drawer
    <DrawerLayoutAndroid ref={drawer} renderNavigationView={componentDrawer}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Open Drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

export default App;
