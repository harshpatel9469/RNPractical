import React from 'react';
import {scale} from 'react-native-size-matters';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Colors} from '../utils/colors';

export default function CustomToast({text1}) {
  return (
    <View style={styles.main}>
      <AntDesign
        name="check"
        color={Colors.green}
        size={scale(20)}
        style={{marginTop: scale(5), marginRight: scale(5)}}
      />
      <Text style={styles.textStyle}>{text1}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    height: scale(48),
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: scale(4),
  },
  textStyle: {
    fontSize: scale(16),
    fontFamily: 'Quicksand-Regular',
    fontWeight: '400',
    color: Colors.white,
  },
});
