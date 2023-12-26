import type { State } from '@/store/state';

export type Getters<T> = {
  [key: string]: (state: T) => void;
};

const getters: Getters<State> = {
  menuIndex: state => state.menuIndex,
  subMenuIndex: state => state.subMenuIndex,
  loginDialog: state => state.loginDialog,
  userInfo: state => state.userInfo,
  cookie: state => state.cookie,
  isLogin: state => state.isLogin,
  songSheetId: state => state.songSheetId,
  searchText: state => state.searchText,
  searchDetailText: state => state.searchDetailText,
  searchIndex: state => state.searchIndex,
  singerTabIndex: state => state.singerTabIndex,
  collectSong: state => state.collectSong,
  copyright: state => state.copyright,
  abnormal: state => state.abnormal
};

export default getters;
