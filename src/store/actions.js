export const changeMsg = ({commit},payload) => {
  commit('mutationsMsg',payload);
};
export const changeUserInfo = ({commit},payload) => {
  commit('mutationsUser',payload);
};
export const changePlaceData = ({commit},payload) => {
  commit('mutationsPlace',payload);
};