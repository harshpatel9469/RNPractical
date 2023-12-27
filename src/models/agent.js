import {createModel} from '@rematch/core';
import Toast from 'react-native-toast-message';

export const agent = createModel()({
  state: {
    agentList: [],
  },
  reducers: {
    setAgentList(state, agent) {
      return {...state, agentList: [...state.agentList, agent]};
    },
    deleteAgent(state, deleteAgentId) {
      console.log(deleteAgentId);
      let arr = state.agentList;
      let index = arr.findIndex(agent => agent.id === deleteAgentId);
      arr.splice(index, 1);
      Toast.show({
        type: 'tomatoToast',
        text1: 'Managing agent details deleted',
      });
      return {...state, agentList: [...arr]};
    },
    editAgent(state, agent) {
      return {
        ...state,
        agentList: state.agentList.map(obj => {
          if (obj.id === agent.id) {
            return {...obj, ...agent};
          }
          return obj;
        }),
      };
    },
  },

  effects: dispatch => ({}),
});
