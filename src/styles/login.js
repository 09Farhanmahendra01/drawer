import {
  Warna_Disable,
  Warna_Hitam,
  Warna_Putih,
  Warna_Sekunder,
  Warna_Utama,
} from '../utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Warna_Utama,
  },
  conter_1: {
    flex: 1,
    backgroundColor: Warna_Utama,
  },
  conter_User: {
    flexDirection: 'row',
    paddingLeft: 45,
    marginTop: '33%',
  },
  conter_2: {
    flex: 2,
    backgroundColor: Warna_Putih,
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    paddingHorizontal: 25,
  },
  conter_Email: {
    marginTop: '15%',
    borderBottomWidth: 1,
    borderBottomColor: Warna_Sekunder,
  },
  textEmail: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: Warna_Hitam,
  },
  conter_IconEmail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_email: {
    width: 24,
    height: 24,
  },
  textInput: {
    paddingLeft: 15,
    width: '85%',
  },
  conter_IconMata: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 0,
  },
  icon_Mata: {
    width: 24,
    height: 24,
  },
  textFor: {
    textAlign: 'right',
    marginTop: '5%',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: Warna_Hitam,
  },
  conterBottom: {
    alignItems: 'center',
    marginTop: '25%',
  },
  bottom_Sign: {
    width: '80%',
    height: '30%',
    borderRadius: 10,
    backgroundColor: Warna_Utama,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBottomSign: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: Warna_Putih,
  },
  conter_TexttDont: {
    flexDirection: 'row',
    marginTop: 15,
  },
  textDon: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: Warna_Disable,
  },
  text_Sign: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: Warna_Utama,
  },
});
