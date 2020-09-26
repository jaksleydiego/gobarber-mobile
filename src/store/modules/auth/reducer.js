import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ' @auth/SIGN_IN_REQUEST': {
        draft.toke = action.pauload.token;
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCESS': {
        draft.profile = action.payload.token;
        draft.signed = true;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
