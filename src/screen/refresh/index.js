import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const Refresh = ({navigation}) => {
  useEffect(() => {
    navigation.replace('Catatan');
  }, []);
  return (
    <View>
      <Text>Refresh</Text>
    </View>
  );
};

export default Refresh;
