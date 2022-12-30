import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Warna_Hitam, Warna_Putih, Warna_Utama} from '../../utils';

const HeaderIconHome = ({title, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 22,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: Warna_Utama,
      }}>
      <TouchableOpacity onPress={onPress}>
        <Icon name="menu" size={30} color={Warna_Putih} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'Poppins-SemiBold',
          color: Warna_Putih,
          paddingLeft: 20,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderIconHome;
