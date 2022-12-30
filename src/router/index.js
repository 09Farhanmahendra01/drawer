import React, {createContext, useState} from 'react';
import Homescreen from '../screen/homescreen';
import Tambah from '../screen/tambah';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Refresh from '../screen/refresh';
import Editcontent from '../screen/edit_content';
import Latihan from '../screen/latihan';
import Select from '../screen/select _latihan';
const Stack = createNativeStackNavigator();
export const userContext = createContext();

const Router = () => {
  const [data, setData] = useState([
    {
      OutletSurveyTaskID: 21,
      TaskNo: 1,
      OutletSurveyTaskName: 'Halodoc',
      QuestionTypeID: 1,
      QuestionTypeName: 'CheckBox',
      Value: 0,
      StartDate: '2022-11-01T00:00:00',
      EndDate: '4001-01-01T00:00:00',
      IsActive: 1,
      OutletSurveyTaskHeaderName: 'Telemedicine Name',
    },
    {
      OutletSurveyTaskID: 21,
      TaskNo: 2,
      OutletSurveyTaskName: 'Alodokter',
      QuestionTypeID: 1,
      QuestionTypeName: 'CheckBox',
      Value: 0,
      StartDate: '2022-11-01T00:00:00',
      EndDate: '4001-01-01T00:00:00',
      IsActive: 1,
      OutletSurveyTaskHeaderName: 'Telemedicine Name',
    },
    {
      OutletSurveyTaskID: 21,
      TaskNo: 3,
      OutletSurveyTaskName: 'Klikdokter',
      QuestionTypeID: 1,
      QuestionTypeName: 'CheckBox',
      Value: 0,
      StartDate: '2022-11-01T00:00:00',
      EndDate: '4001-01-01T00:00:00',
      IsActive: 1,
      OutletSurveyTaskHeaderName: 'Telemedicine Name',
    },
    {
      OutletSurveyTaskID: 21,
      TaskNo: 4,
      OutletSurveyTaskName: 'Telemedicine RS/Klinik',
      QuestionTypeID: 1,
      QuestionTypeName: 'CheckBox',
      Value: 0,
      StartDate: '2022-11-01T00:00:00',
      EndDate: '4001-01-01T00:00:00',
      IsActive: 1,
      OutletSurveyTaskHeaderName: 'Telemedicine Name',
    },
    {
      OutletSurveyTaskID: 21,
      TaskNo: 5,
      OutletSurveyTaskName: 'Praktik Online Pribadi',
      QuestionTypeID: 1,
      QuestionTypeName: 'CheckBox',
      Value: 0,
      StartDate: '2022-11-01T00:00:00',
      EndDate: '4001-01-01T00:00:00',
      IsActive: 1,
      OutletSurveyTaskHeaderName: 'Telemedicine Name',
    },
    {
      OutletSurveyTaskID: 21,
      TaskNo: 6,
      OutletSurveyTaskName: 'Apps Lainnya',
      QuestionTypeID: 1,
      QuestionTypeName: 'CheckBox',
      Value: 0,
      StartDate: '2022-11-01T00:00:00',
      EndDate: '4001-01-01T00:00:00',
      IsActive: 1,
      OutletSurveyTaskHeaderName: 'Telemedicine Name',
    },
    {
      OutletSurveyTaskID: 22,
      TaskNo: 1,
      OutletSurveyTaskName: 'Practice Location',
      QuestionTypeID: 4,
      QuestionTypeName: 'Notes',
      Value: 0,
      StartDate: '2022-11-01T00:00:00',
      EndDate: '4001-01-01T00:00:00',
      IsActive: 1,
      OutletSurveyTaskHeaderName: 'Practice Location',
    },
  ]);
  return (
    <userContext.Provider
      value={{
        nama: [data, setData],
      }}>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Catatan"
          component={Homescreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="tambah"
          component={Tambah}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="refresh"
          component={Refresh}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="editcontent"
          component={Editcontent}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="latihan"
          component={Latihan}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="select"
          component={Select}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </userContext.Provider>
  );
};

export default Router;
