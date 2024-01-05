import type { State, VideoPlayProgress } from '@/store/video/state';

type Mutations<T, U = any> = {
  [key: string]: (state: T, payload: U) => void;
};

const mutations: Mutations<State> = {
  setVideoPlayUrl(state, url: string) {
    state.videoPlayUrl = url;
    localStorage.setItem('videoPlayUrl', JSON.stringify(url));
  },
  // 播放进度
  setVideoPlayProgress(state, playProgress: VideoPlayProgress) {
    const videoPlayProgress = JSON.parse(
      JSON.stringify(state.videoPlayProgress)
    );
    const progress = Object.assign(videoPlayProgress, playProgress);
    state.videoPlayProgress = progress;
  },
  // 音量
  setVideoVolume(state, videoVolume: number) {
    state.videoVolume = videoVolume;
    localStorage.setItem('videoVolume', JSON.stringify(videoVolume));
  }
};

export default mutations;
