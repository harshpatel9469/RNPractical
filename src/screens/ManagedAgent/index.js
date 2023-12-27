import {
  Text,
  View,
  Image,
  Modal,
  FlatList,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {scale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Colors} from '../../utils/colors';
import {Images} from '../../utils/images';
import Button from '../../component/Button';
import AgentCard from '../../component/AgentCard';

import styles from './style';

const ManagedAgent = ({navigation}) => {
  const dispatch = useDispatch();
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [agentId, setAgentId] = useState();
  const agentList = useSelector(state => state.agent.agentList);
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.closeContent}>
          <TouchableOpacity
            onPress={() => {
              BackHandler.exitApp();
            }}
            style={styles.closeBox}>
            <AntDesign name={'close'} size={scale(16)} color={Colors.black} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>Manaaged by Agent</Text>
      </View>
      {agentList?.length > 0 ? (
        <FlatList
          data={agentList}
          style={styles.listContainer}
          renderItem={({item, index}) => {
            return (
              <AgentCard
                key={index}
                agent={item}
                onDeletePress={() => {
                  setAgentId(item.id);
                  setIsDeleteModal(true);
                }}
                onEditPress={() => {
                  navigation.navigate('AddAgent', {agent: item});
                }}
              />
            );
          }}
        />
      ) : (
        <>
          <View style={styles.emptyContent}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Image source={Images.bg} style={styles.emptyImage} />
            </View>
          </View>
          <View style={styles.bottomContent}>
            <Button
              text={'Add Managing Agent'}
              onPress={() => {
                navigation.navigate('AddAgent');
              }}
            />
          </View>
        </>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={isDeleteModal}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Delete managing agent</Text>
            <Text style={styles.modalMessageText}>
              Are you sure you want to delete managing agent details?
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                text={'Cancel'}
                buttonStyle={{width: '48%'}}
                onPress={() => setIsDeleteModal(false)}
              />
              <Button
                text={'Delete'}
                buttonStyle={styles.deleteButton}
                textStyle={{color: Colors.black}}
                onPress={() => {
                  setIsDeleteModal(false);
                  dispatch.agent.deleteAgent(agentId);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ManagedAgent;
