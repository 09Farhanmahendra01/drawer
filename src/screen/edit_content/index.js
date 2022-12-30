import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {userContext} from '../../router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Editcontent = ({navigation, route}) => {
  // Variable lokal
  const [perubahanjudul, setPerubahanjudul] = useState();
  const [perubahancontent, setPerubahancontent] = useState();
  const [tangkapindex, setTangkapindex] = useState();
  // Variable global
  const {nama} = useContext(userContext);
  const [data, setData] = nama;

  useEffect(() => {
    setPerubahanjudul(route.params.judul);
    setPerubahancontent(route.params.isi);
    setTangkapindex(route.params.value);
    get_data();
  }, []);

  // manggil data dari asyncStorage
  const get_data = async () => {
    try {
      let value = await AsyncStorage.getItem('database');
      value = JSON.parse(value);
      if (value != null) {
        setData(value);
        console.log(value);
      }
    } catch (error) {
      console.log('get data error' + error);
    }
  };

  // ubah data
  const ubah_data = index => {
    data[index].judul = perubahanjudul;
    data[index].contentCatatan = perubahancontent;
    setData(data);
    save_data_to_asyncStorage(data);
    navigation.replace('Catatan');
  };
  // save perubahan data di asynscStorage
  const save_data_to_asyncStorage = async data_from_variable_global => {
    try {
      await AsyncStorage.setItem(
        'database',
        JSON.stringify(data_from_variable_global),
      );
    } catch (error) {
      console.log('Set item', error);
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          width: '100%',
          paddingLeft: 20,
          height: 30,
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.replace('Catatan');
        }}>
        <View>
          <Text style={{color: 'white'}}>Kembali</Text>
        </View>
      </TouchableOpacity>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <Text style={{marginBottom: 10, fontSize: 17, fontWeight: 'bold'}}>
          Edit Judul
        </Text>
        <TextInput
          style={{
            backgroundColor: 'white',
            width: 300,
            borderRadius: 20,
            borderWidth: 2,
            paddingHorizontal: 15,
          }}
          onChangeText={val => setPerubahanjudul(val)}
          multiline={true}
          value={perubahanjudul}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <Text style={{marginBottom: 10, fontSize: 17, fontWeight: 'bold'}}>
          Edit Content
        </Text>
        <TextInput
          style={{
            backgroundColor: 'white',
            width: 300,
            borderRadius: 20,
            borderWidth: 2,
            paddingHorizontal: 15,
          }}
          onChangeText={val => {
            setPerubahancontent(val);
          }}
          value={perubahancontent}
          multiline={true}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          ubah_data(tangkapindex);
        }}>
        <View
          style={{
            backgroundColor: 'green',
            width: 200,
            height: 35,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            borderRadius: 20,
          }}>
          <Text style={{color: 'white'}}>Simpan Perubahan</Text>
        </View>
      </TouchableOpacity>
      <Text>{tangkapindex}</Text>
    </View>
  );
};

export default Editcontent;
