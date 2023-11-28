import { AppContext, createVNode, render } from 'vue';
import VideoPlayerComponent from './VideoPlayer.vue';

const VideoPlayer = {
  install: (app: { _context: AppContext | null }): void => {
    // 创建虚拟dom
    const vm = createVNode(VideoPlayerComponent, {});

    // 关联数据
    vm.appContext = app._context;

    // 挂载
    const element = document.getElementById('video-palyer') as HTMLDivElement;
    render(vm, element);
  }
};

export default VideoPlayer;
