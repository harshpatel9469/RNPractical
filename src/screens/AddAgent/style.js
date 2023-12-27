import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {Colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  head: {flex: 0.25, paddingHorizontal: scale(20)},
  cancelText: {
    fontFamily: 'Quicksand-Regular',
    fontWeight: '500',
    fontSize: scale(16),
    color: Colors.black,
  },
  headText: {
    fontFamily: 'Quicksand-Regular',
    fontWeight: '500',
    fontSize: scale(30),
    color: Colors.black,
  },
  formContainer: {
    paddingVertical: scale(35),
    borderBottomColor: Colors.black2,
    paddingHorizontal: scale(20),
    borderBottomWidth: 1,
  },
  bottom: {paddingHorizontal: scale(20), paddingVertical: scale(30)},
});

export default styles;
