import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  Warna_Disable,
  Warna_Putih,
  Warna_Sekunder,
  Warna_Utama,
} from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {userContext} from '../../router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal_for_deskripsi_content from '../../components/modal_for_deskripsi_content';
const Homescreen = ({navigation}) => {
  // Variable lokal
  const [i, setI] = useState('');
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [tampildata, setTampildata] = useState();
  const [tampildatadeskripsi, setTampildatadeskripsi] = useState();
  const [tampilindex, setTampilindex] = useState();
  // variabel global
  const {nama} = useContext(userContext);
  const [data, setData] = nama;
  // useEffect
  useEffect(() => {
    const refresh = navigation.addListener('focus', () => {
      get_data();
    });
    return refresh;
  }, [navigation]);

  // Memanggil data dari asyncStorage
  const get_data = async () => {
    setLoading(true);
    try {
      let value = await AsyncStorage.getItem('database');
      value = JSON.parse(value);
      if (value != null) {
        setData(value);
        console.log(value);
      }
    } catch (error) {
      console.log('memanggil data', error);
    } finally {
      setLoading(false);
    }
  };
  // Alert confirm hapus catatan
  const alert_confirm_hapus_catatan = index => {
    Alert.alert('Hapus Catatan..!', 'Apakah anda yakin Untuk Menghapusnya ?', [
      {
        text: 'Batal',
        style: 'cancel',
      },
      {
        text: 'Oke',
        onPress: () => {
          hapus_catatan(index);
        },
      },
    ]);
  };

  // menghapus catatan
  const hapus_catatan = index => {
    data.splice(index, 1);
    console.log('Data pada index ke ' + index + 'Telah terhapus');
    setData(data);
    save_data_to_asyncStorage(data);
    navigation.replace('refresh');
    setTimeout(() => {
      alert_sukses_delete();
    }, 500);
  };
  // Menyimpan data di asyncStorage
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
  // alert sukses delete
  const alert_sukses_delete = item => {
    Alert.alert('STATUS..!!', 'Data Berhasil Terhapus...!!!', [
      {
        text: 'Oke',
        style: 'cancel',
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.conterBottom}
        onPress={() => navigation.navigate('tambah')}>
        <Icon name="plus" size={30} color={Warna_Putih} />
      </TouchableOpacity>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              [
                setModal(true),
                setTampildata(item.judul),
                setTampildatadeskripsi(item.contentCatatan),
                setTampilindex(index),
              ];
            }}
            key={index}>
            <View style={styles.containerContent}>
              <View style={{width: 250}}>
                <Text style={styles.text}>{item.judul}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  [setI(index), alert_confirm_hapus_catatan(index)];
                }}>
                <Icon name="delete" size={25} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      })}
      <Modal_for_deskripsi_content
        isVisible={modal}
        back={() => {
          setModal(false);
        }}
        judul={tampildata}
        content={tampildatadeskripsi}
        go_screen_edit={() =>
          navigation.replace('editcontent', {
            value: tampilindex,
            judul: tampildata,
            isi: tampildatadeskripsi,
          })
        }
      />
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Warna_Putih,
    alignItems: 'center',
  },
  containerContent: {
    marginTop: 30,
    backgroundColor: Warna_Sekunder,
    elevation: 10,
    width: 300,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  conterBottom: {
    backgroundColor: Warna_Utama,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 15,
  },
});
