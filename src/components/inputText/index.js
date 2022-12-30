import {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Warna_Hitam, Warna_Sekunder} from '../../utils';

export default class InputText extends Component {
  render() {
    return (
      <View style={styles.conter_Email}>
        <Text style={styles.textEmail}>{this.props.title}</Text>
        <View style={styles.conter_IconEmail}>
          <Image source={this.props.icon} style={styles.icon_email} />
          <TextInput
            placeholder={this.props.plc}
            style={styles.textInput}
            secureTextEntry={this.props.textEntry}
          />
          <TouchableOpacity onPress={this.props.tekan}>
            <Image source={this.props.mata} style={styles.icon_Mata} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conter_Email: {
    marginTop: '13%',
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
  icon_Mata: {
    width: 24,
    height: 24,
  },
});
