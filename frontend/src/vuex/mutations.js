export default {
  LOGIN(state, payload) {
    state.user = payload;
  },
  LOGOUT(state) {
    if (state.user) {
      state.user = {};
      alert('로그아웃되었습니다.');
    }
  },
  MOVETOBOARDDETAIL(state, id) {
    state.boardDetailId = id;
  },
  MOVETOBOARDCATEGORY(state, payload) {
    state.categoryId = payload.value;
    state.categoryName = payload.name;
  },
  FETCHSTUDYING(state) {
    state.user.userIsStudying = true;
  },
  STOPSTUDYING(state) {
    state.user.userIsStudying = false;
  },
  userInit(state) {
    state.user = {};
  },
  setAwayTime(state) {
    state.awayTime++;
  },
  setPhoneTime(state) {
    state.phoneTime++;
  },
  RECOMMENDGROUP(state, payload){
    state.Rgroup = payload;
  }
};
