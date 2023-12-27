import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {Colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  head: {flex: 0.25, paddingHorizontal: scale(20)},
  closeContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: scale(16),
  },
  closeBox: {
    height: scale(28),
    width: scale(28),
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Quicksand-Regular',
    fontWeight: '500',
    fontSize: scale(30),
    color: Colors.black,
  },
  listContainer: {
    marginVertical: scale(50),
    paddingHorizontal: scale(20),
    flex: 0.7,
  },
  emptyContent: {
    paddingVertical: scale(50),
    flex: 0.55,
    borderBottomWidth: 1,
    borderBottomColor: Colors.black2,
    paddingHorizontal: scale(20),
  },
  emptyImage: {
    height: scale(282),
    width: scale(180),
    resizeMode: 'contain',
  },
  bottomContent: {
    flex: 0.2,
    paddingHorizontal: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: Colors.black2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '85%',
    borderRadius: scale(8),
    backgroundColor: Colors.white,
    padding: scale(20),
    alignItems: 'center',
  },
  modalTitle: {
    color: Colors.black,
    fontFamily: 'Quicksand-Regular',
    fontWeight: '600',
    fontSize: scale(18),
  },
  modalMessageText: {
    color: Colors.black3,
    fontFamily: 'Quicksand-Regular',
    fontWeight: '400',
    fontSize: scale(17),
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(25),
  },
  deleteButton: {width: '48%', backgroundColor: Colors.lightGreen},
});

export default styles;
