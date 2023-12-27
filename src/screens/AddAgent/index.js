import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {scale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {Colors} from '../../utils/colors';
import Button from '../../component/Button';
import TextInputWithLabel from '../../component/TextInputWithLabel';
import {isValidEmail, isValidMobileNumber} from '../../utils/utils';

import styles from './style';

const AddAgent = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [landlineNo, setLandLineNo] = useState('');
  const [licenseNo, setLicenseNo] = useState('');
  const [primaryEmail, setPrimaryEmail] = useState('');
  const [secEmail, setSecEmail] = useState('');
  const agent = route.params?.agent;

  const agentList = useSelector(state => state.agent.agentList);
  const isEmpty =
    companyName == '' ||
    contactPerson == '' ||
    mobileNo == '' ||
    landlineNo == '' ||
    licenseNo == '' ||
    secEmail == '' ||
    primaryEmail == '';

  useEffect(() => {
    if (agent != null) {
      setCompanyName(agent.companyName);
      setContactPerson(agent.contactPerson);
      setLandLineNo(agent.landlineNo);
      setMobileNo(agent.mobileNo);
      setPrimaryEmail(agent.primaryEmail);
      setSecEmail(agent.secEmail);
      setLicenseNo(agent.licenseNo);
    }
  }, []);

  const onSubmit = async () => {
    try {
      if (!isValidMobileNumber(mobileNo)) {
        Toast.show({type: 'error', text1: 'Please enter valid Mobile Number'});
      } else if (!isValidMobileNumber(landlineNo)) {
        Toast.show({
          type: 'error',
          text1: 'Please enter valid Landline Number',
        });
      } else if (!isValidEmail(primaryEmail)) {
        Toast.show({
          type: 'error',
          text1: 'Please enter valid Primary Email Address',
        });
      } else if (!isValidEmail(secEmail)) {
        Toast.show({
          type: 'error',
          text1: 'Please enter valid Secondary Email Address',
        });
      } else {
        const obj = {
          id: agent?.id ? agent?.id : agentList.length + 1,
          companyName,
          contactPerson,
          mobileNo,
          landlineNo,
          licenseNo,
          secEmail,
          primaryEmail,
        };
        if (agent?.id) {
          await dispatch.agent.editAgent(obj);
        } else await dispatch.agent.setAgentList(obj);
        navigation.navigate('ManagedAgent');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <KeyboardAvoidingScrollView>
      <View style={styles.container}>
        <View style={styles.head}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginVertical: scale(16),
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.headText}>Add Managing Agent</Text>
        </View>
        <View
          style={styles.formContainer}>
          <TextInputWithLabel
            placeHolder={'Name of the Company'}
            value={companyName}
            onChangeText={setCompanyName}
          />
          <TextInputWithLabel
            placeHolder={'Name of Contact Person'}
            value={contactPerson}
            onChangeText={setContactPerson}
          />
          <TextInputWithLabel
            placeHolder={'Mobile Number'}
            value={mobileNo}
            onChangeText={setMobileNo}
          />

          <TextInputWithLabel
            placeHolder={'LandLine No.'}
            value={landlineNo}
            onChangeText={setLandLineNo}
          />
          <TextInputWithLabel
            placeHolder={'License No.'}
            value={licenseNo}
            onChangeText={setLicenseNo}
          />
          <TextInputWithLabel
            placeHolder={'Primary Email Address'}
            value={primaryEmail}
            onChangeText={setPrimaryEmail}
          />

          <TextInputWithLabel
            placeHolder={'Secondary Email Address'}
            value={secEmail}
            onChangeText={setSecEmail}
          />
        </View>
        <View
          style={styles.bottom}>
          <Button text={'Submit'} isEmpty={isEmpty} onPress={onSubmit} />
        </View>
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default AddAgent;
