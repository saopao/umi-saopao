// import * as usersService from '../services/users';

export default {
  namespace: 'global',
  state: {
    key:""
  },
  effects: {
    *getKeys({payload}, { call, put }) {
      yield put({ type: 'save', payload:{name:"saopaopao"}});
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
//   subscriptions: {
//     setup({ dispatch, history }) {
//       return history.listen(({ pathname, query }) => {
//         if (pathname === '/users') {
//           dispatch({ type: 'fetch', payload: query });
//         }
//       });
//     },
//   },
};
