import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {userContext} from '../../router';

const Select = ({route, navigation}) => {
  const [sate, setSate] = useState(false);
  const [tongseng, setTongseng] = useState(false);
  const {nama} = useContext(userContext);
  const [data, setData] = nama;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox
          disabled={false}
          value={sate}
          onValueChange={newValue => {
            setSate(newValue);
            data[route.params.Nilai_index].status = 'true';
            data[route.params.Nilai_index].makanan.push({
              menu1: 'Tongseng',
            });
            setData(data);
          }}
        />
        <Text>Tongseng</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox
          disabled={false}
          value={tongseng}
          onValueChange={newValue => {
            setTongseng(newValue);
            data[route.params.Nilai_index].status = 'true';
            data[route.params.Nilai_index].makanan.push({
              menu1: 'sate',
            });
            setData(data);
          }}
        />
        <Text>Sate</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace('latihan')}
        style={{
          backgroundColor: 'blue',
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 5,
          marginTop: 10,
        }}>
        <Text>OKe</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Select;
