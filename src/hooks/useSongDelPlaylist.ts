import { ref, computed } from 'vue';
import store from '@/store/index';
import { toRawType } from '@/utils/tool';
import useSongFormat from '@/hooks/songFormat';
import type { SongType, MusicItemType } from '@/hooks/songFormat';

/**
 * @description 歌曲从播放列表删除
 * @param { Object } song - 歌曲数据
 */
function useSongDelPlaylist(song: SongType): void {
  if (toRawType(song) !== 'Object') {
    throw new Error('删除的歌曲数据类型错误!');
  }

  const songPlaylist = computed<MusicItemType[]>(
    () => store.getters['music/songPlaylist']
  );

  const musicItem: MusicItemType = useSongFormat(song);
  const musicList = ref<MusicItemType[]>([]);

  songPlaylist.value.forEach((item: MusicItemType) => {
    if (item.id !== musicItem.id) {
      musicList.value.push(item);
    }
  });

  store.commit('music/setSongPlaylist', musicList.value);
}

export default useSongDelPlaylist;
