import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useContext, useState} from 'react';
import Modal from 'react-native-modal';
import {create} from 'react-test-renderer';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {userContext} from '../../router';

const Modal_for_deskripsi_content = ({
  isVisible,
  judul,
  content,
  back,
  go_screen_edit,
  key,
}) => {
  return (
    <Modal isVisible={isVisible} style={styles.container} animationIn="zoomIn">
      <ScrollView>
        <View style={styles.tittle} key={key}>
          <TouchableOpacity onPress={back}>
            <Icon2 name="arrow-back" size={30} />
          </TouchableOpacity>
          <View style={{width: 200, alignItems: 'center'}}>
            <Text style={styles.textTitle}>{judul}</Text>
          </View>
          <TouchableOpacity onPress={go_screen_edit}>
            <View>
              <Icon name="edit" size={30} />
              <Text style={{marginTop: 8}}>EDIT</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={{lineHeight: 24}}>{content}</Text>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  tittle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  content: {
    justifyContent: 'center',
    marginTop: 40,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
  },
});

export default Modal_for_deskripsi_content;
