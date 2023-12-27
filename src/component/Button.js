import React from 'react';
import {scale} from 'react-native-size-matters';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Colors} from '../utils/colors';

export default function Button({
  text,
  onPress,
  buttonStyle,
  textStyle,
  isEmpty,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.buttonMain,
        {backgroundColor: isEmpty ? Colors.black2 : Colors.primaryBlue},
        buttonStyle,
      ]}
      disabled={isEmpty}
      onPress={onPress}>
      <Text style={[styles.titleStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonMain: {
    width: '100%',
    borderRadius: scale(50),
    height: scale(48),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: Colors.white,
    fontFamily: 'Quicksand-Regular',
    fontWeight: '600',
    fontSize: scale(16),
  },
});
