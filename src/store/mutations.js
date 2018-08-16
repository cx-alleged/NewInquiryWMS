export const mutationsMsg = (state, payload) => {
    state.msg = payload.msg;
  };
export const mutationsUser = (state, payload) => {
    state.userInfo = payload.userInfo;
};
export const mutationsPlace = (state, payload) => {
   state.placeDate = payload;
};