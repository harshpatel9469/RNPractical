import React from 'react';
import {scale} from 'react-native-size-matters';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../utils/colors';

export default function AgentCard({onDeletePress, onEditPress, agent}) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.subContainer}>
        <Ionicons name="person" color={Colors.primaryBlue} size={scale(20)} />
        <View
          style={{
            width: '75%',
            marginTop: scale(-5),
          }}>
          <Text style={styles.companyText}>{agent.companyName}</Text>
          <Text style={styles.contactPersonText}>{agent.contactPerson}</Text>
          <Text style={styles.mobileText}>{agent.mobileNo}</Text>
        </View>
        <TouchableOpacity onPress={onEditPress}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.deletContainer}>
        <TouchableOpacity onPress={onDeletePress}>
          <Text style={styles.deleteText}>Delete Agent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: Colors.white,
    padding: scale(16),
    borderRadius: scale(4),
    marginBottom: scale(10),
  },
  subContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.black2,
    flexDirection: 'row',
    paddingBottom: scale(16),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  companyText: {
    color: Colors.black,
    fontFamily: 'Quicksand-Regular',
    fontWeight: '600',
    fontSize: scale(18),
  },
  contactPersonText: {
    color: Colors.black3,
    fontFamily: 'Quicksand-Regular',
    fontWeight: '600',
    fontSize: scale(16),
  },
  mobileText: {
    color: Colors.black3,
    fontFamily: 'Quicksand-Regular',
    fontWeight: '600',
    fontSize: scale(16),
  },
  editText: {
    color: Colors.primaryBlue,
    fontFamily: 'Quicksand-Regular',
    fontWeight: '600',
    fontSize: scale(16),
    textDecorationLine: 'underline',
  },
  deletContainer: {alignItems: 'center', paddingTop: scale(12)},
  deleteText: {
    color: Colors.red,
    fontFamily: 'Quicksand-Regular',
    fontWeight: '600',
    fontSize: scale(16),
    textDecorationLine: 'underline',
  },
});
