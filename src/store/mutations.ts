import type { State } from '@/store/state';
import { clearAllCookie } from '@/utils/cookie';

type Mutations<T, U = any> = {
  [key: string]: (state: T, payload: U) => void;
};

const mutations: Mutations<State> = {
  // 头部导航
  setMenuIndex(state, index: number) {
    state.menuIndex = index;
    localStorage.setItem('menuIndex', String(index));
  },
  // 二级导航
  setSubMenuIndex(state, index: number) {
    state.subMenuIndex = index;
    localStorage.setItem('subMenuIndex', String(index));
  },
  // 登录对话框
  setLoginDialog(state, bool: boolean) {
    state.loginDialog = bool;
  },
  setUserInfo(state, userInfo: unknown) {
    state.userInfo = userInfo;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    // 是否登录
    state.isLogin = true;
    localStorage.setItem('isLogin', JSON.stringify(true));
  },
  setCookie(state, cookie: string) {
    state.cookie = cookie;
    localStorage.setItem('cookie', JSON.stringify(cookie));
  },
  // 搜索关键字
  setSearchText(state, searchText: string) {
    state.searchText = searchText;
  },
  // 搜索详情关键字
  setSearchDetailText(state, searchDetailText: string) {
    state.searchDetailText = searchDetailText;
    localStorage.setItem('searchDetailText', JSON.stringify(searchDetailText));
  },
  // 歌手详情tab
  setSingerTabIndex(state, singerTabIndex: number) {
    state.singerTabIndex = singerTabIndex;
    localStorage.setItem('singerTabIndex', JSON.stringify(singerTabIndex));
  },
  // 搜索详情tab
  setSearchIndex(state, searchIndex: number) {
    state.searchIndex = searchIndex;
    localStorage.setItem('searchIndex', JSON.stringify(searchIndex));
  },
  // 签到
  setSignIn(state, signIn: boolean) {
    const userInfo = JSON.parse(JSON.stringify(state.userInfo));
    userInfo.pcSign = signIn;
    state.userInfo = userInfo as unknown;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  },
  // 退出登录
  setLogout(state) {
    state.isLogin = false;
    state.userInfo = {};
    localStorage.clear();
    clearAllCookie();
  },
  // 我的音乐 - 歌单id
  setSongSheetId(state, songSheetId: number) {
    state.songSheetId = songSheetId;
    localStorage.setItem('songSheetId', JSON.stringify(songSheetId));
  },
  // 收藏歌曲
  collectPlayMusic(state, song: State['collectSong']) {
    state.collectSong = song;
  },
  // 版权提示
  setCopyright(state, data: State['copyright']) {
    state.copyright = data;
  },
  // 异常对话框
  setAbnormal(state, tip) {
    const keys = Object.keys(tip);

    for (const key of keys) {
      // @ts-expect-error - unknown
      state.abnormal[key as keyof typeof keys] = tip[key];
    }
  }
};

export default mutations;
