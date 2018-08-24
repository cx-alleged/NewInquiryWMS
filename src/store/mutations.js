
export const mutationsUser = (state, payload) => {
    state.userInfo = payload.userInfo;
};
export const mutationsPlace = (state, payload) => {
   state.placeDate = payload;
};
export const setPathParams = (state, payload) =>{
    state.pathParams = payload;
    window.localStorage.setItem('pathParams', state.pathParams);
};
export const clearPathParams = (state, payload) =>{
    state.pathParams = {};
    window.localStorage.setItem('pathParams', state.pathParams)
};
export const setPrePathParams = (state, payload) =>{
    state.prePathParams = payload;
    window.localStorage.setItem('prePathParams', state.prePathParams);
};
export const clearPrePathParams = (state, payload) =>{
    state.prePathParams = {};
    window.localStorage.setItem('prePathParams', state.prePathParams)
};
