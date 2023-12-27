import React, {useEffect, useRef} from 'react';
import {scale} from 'react-native-size-matters';
import {View, StyleSheet, TextInput, Text, Animated} from 'react-native';

import {Colors} from '../utils/colors';

const TextInputWithLabel = ({placeHolder, value, onChangeText}) => {
  const moveText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (value !== '') {
      moveTextTop();
    } else if (value === '') {
      moveTextBottom();
    }
  }, [value]);

  const onFocusHandler = () => {
    if (value !== '') {
      moveTextTop();
    }
  };

  const onBlurHandler = () => {
    if (value === '') {
      moveTextBottom();
    }
  };

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -20],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Text style={styles.label}>{placeHolder}</Text>
      </Animated.View>
      <TextInput
        autoCapitalize={'none'}
        style={styles.input}
        value={value}
        onChangeText={text => onChangeText(text)}
        editable={true}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        blurOnSubmit
      />
    </View>
  );
};
export default TextInputWithLabel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: scale(8),
    paddingHorizontal: scale(16),
    paddingVertical: scale(8),
    marginVertical: scale(10),
    justifyContent: 'center',
  },
  input: {
    fontFamily: 'Quicksand-Regular',
    fontWeight: '400',
    fontSize: scale(16),
    color: Colors.black,
    height: scale(45),
  },
  label: {
    fontFamily: 'Quicksand-Regular',
    fontWeight: '500',
    fontSize: scale(14),
    color: Colors.black3,
  },
  animatedStyle: {
    top: scale(17),
    left: scale(18),
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
  },
});
