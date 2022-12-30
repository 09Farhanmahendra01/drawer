import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {Warna_Putih} from '../../utils';
import {Icon_User} from '../../assets';

export default class UserWelcome extends Component {
  render() {
    return (
      <View style={this.props.boxUser}>
        <Image source={Icon_User} style={styles.user} />
        <View style={styles.conter_Wel}>
          <Text style={styles.textWel}>Welcome</Text>
          <Text style={styles.textSign}>{this.props.welcome}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  user: {
    width: 50,
    height: 50,
  },
  conter_Wel: {
    paddingLeft: 20,
  },
  textWel: {
    fontSize: 20,
    color: Warna_Putih,
    fontFamily: 'Poppins-Light',
  },
  textSign: {
    fontSize: 30,
    color: Warna_Putih,
    fontFamily: 'Poppins-Medium',
  },
});
