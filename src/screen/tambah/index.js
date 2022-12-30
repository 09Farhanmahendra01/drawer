import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  Warna_Disable,
  Warna_Putih,
  Warna_Sekunder,
  Warna_Utama,
} from '../../utils';
import {userContext} from '../../router';
import {add} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tambah = ({navigation}) => {
  // variable lokal
  const [judul, setJudul] = useState();
  const [content, setContent] = useState();
  // variable Global
  const {nama} = useContext(userContext);
  const [data, setData] = nama;
  // Rules
  const add_data = () => {
    data.push({
      judul: judul,
      contentCatatan: content,
    });
    setData(data);
    // mentimpan data ke asyncStorage
    save_data_to_asyncStorage(data);
  };
  // function save data to asymcStorage
  const save_data_to_asyncStorage = async data_from_variable_global => {
    try {
      await AsyncStorage.setItem(
        'database',
        JSON.stringify(data_from_variable_global),
      );
    } catch (error) {
      console.log('Set item', error);
    }
    navigation.goBack();
  };

  return (
    <View style={{padding: 20}}>
      <Inputan
        text={'Masukkan Judul :'}
        placeholder="Buatlah Judul"
        onChangeText={val => {
          setJudul(val);
        }}
      />
      <Inputan
        text={'Masukkan isi Catatan :'}
        placeholder="Buatlah isi catatan"
        onChangeText={val => {
          setContent(val);
        }}
      />
      <TouchableOpacity
        style={styles.conterBottom}
        onPress={() => {
          add_data();
        }}>
        <Text style={styles.textTam}>Tambah</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Warna_Disable,
    paddingLeft: 15,
    borderRadius: 7,
  },
  conterBottom: {
    backgroundColor: Warna_Utama,
    marginTop: 30,
    height: 40,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTam: {
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    color: Warna_Putih,
  },
});

const Inputan = ({text, placeholder, onChangeText}) => {
  return (
    <View style={{marginTop: 20}}>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 17,
          color: 'black',
          fontWeight: 'bold',
        }}>
        {text}
      </Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
      />
    </View>
  );
};
export default Tambah;
