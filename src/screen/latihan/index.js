import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {userContext} from '../../router';
import RadioGroup from 'react-native-radio-buttons-group';

const Latihan = ({navigation}) => {
  useEffect(() => {
    const refresh = navigation.addListener('focus', () => {
      console.log(data);
      return refresh;
    });
  }, [navigation]);
  // Variable Lokal
  const [status, setStatus] = useState();
  const [kondisi, setKondisi] = useState(false);
  const [kondisi2, setKondisi2] = useState(false);
  const [kondisi3, setKondisi3] = useState(false);
  const [kondisi4, setKondisi4] = useState(false);
  const [kondisi5, setKondisi5] = useState(false);
  const [kondisi6, setKondisi6] = useState(false);
  // Variable Global
  const {nama} = useContext(userContext);
  const [data, setData] = nama;
  // Data Radio
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'Offline',
      value: 'Offline',
      borderColor: 'black',
      color: 'blue',
      labelStyle: {
        color: 'black',
        fontWeight: 'bold',
      },
      onPress: () => {
        setStatus(radioButtons[0].value);
      },
    },
    {
      id: '2',
      label: 'Online',
      value: 'Online',
      borderColor: 'black',
      color: 'blue',
      labelStyle: {
        color: 'black',
        fontWeight: 'bold',
      },
      onPress: () => {
        setStatus(radioButtons[1].value);
      },
    },
  ]);
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        containerStyle={{
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 50,
        }}
      />
      <ChckBox
        TaskName={'Halodock'}
        value={kondisi}
        onValueChange={value => {
          if (value == true) {
            data[0].Value = 1;
            setData(data);
          } else if (value == false) {
            data[0].Value = 0;
          }
          console.log(data);
          setKondisi(value);
        }}
        status={data[0].Value}
      />
      <ChckBox
        TaskName={'Alodock'}
        value={kondisi2}
        onValueChange={value => {
          if (value == true) {
            data[1].Value = 1;
            setData(data);
          } else if (value == false) {
            data[1].Value = 0;
          }
          console.log(data);
          setKondisi2(value);
        }}
        status={data[1].Value}
      />
      <ChckBox
        TaskName={'Klikdokter'}
        value={kondisi3}
        onValueChange={value => {
          if (value == true) {
            data[2].Value = 1;
            setData(data);
          } else if (value == false) {
            data[2].Value = 0;
          }
          console.log(data);
          setKondisi3(value);
        }}
        status={data[2].Value}
      />
      <ChckBox
        TaskName={'RS/Klinik'}
        value={kondisi4}
        onValueChange={value => {
          if (value == true) {
            data[3].Value = 1;
            setData(data);
          } else if (value == false) {
            data[3].Value = 0;
          }
          setKondisi4(value);

          console.log(data);
        }}
        status={data[3].Value}
      />
      <ChckBox
        TaskName={'Praktik Online'}
        value={kondisi5}
        onValueChange={value => {
          if (value == true) {
            data[4].Value = 1;
            setData(data);
          } else if (value == false) {
            data[4].Value = 0;
          }
          console.log(data);
          setKondisi5(value);
        }}
        status={data[4].Value}
      />
      <ChckBox
        TaskName={'DLL'}
        value={kondisi6}
        onValueChange={value => {
          if (value == true) {
            data[5].Value = 1;
            setData(data);
          } else if (value == false) {
            data[5].Value = 0;
          }
          console.log(data);
          setKondisi6(value);
        }}
        status={data[5].Value}
      />
    </View>
  );
};

const ChckBox = ({TaskName, value, onValueChange, status}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 25,
      }}>
      <View>
        <Text style={{color: 'black', fontSize: 20}}>{TaskName}</Text>
        <Text>Status = {status}</Text>
      </View>
      <CheckBox disabled={false} value={value} onValueChange={onValueChange} />
    </View>
  );
};
export default Latihan;
