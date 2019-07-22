import * as users from '@/services/users';

export default {
  namespace: 'global',
  state: {
    publicKey: ""
  },
  effects: {
    *getPublicKey(state, { call, put }) {
      const { data } = yield call(users.getPublicKey)
      yield put({ type: 'save', payload: { publicKey: data } });
    },
    *login({ payload }, { call }) {
      const data = yield call(users.login,payload)
      return data
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     return history.listen(({ pathname, query }) => {
  //       console.log(pathname,query)
  //       // if (pathname === '/users') {
  //       //   dispatch({ type: 'fetch', payload: query });
  //       // }
  //     });
  //   },
  // }
};
