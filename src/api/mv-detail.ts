import axios from '@/utils/axios';
import type { AxiosPromise } from 'axios';

/**
 * @description 获取mv详情
 * @param { Number } timestamp - 防止接口缓存
 * @param { Number } mvid - mvid
 */
export const mvDetail = ({ mvid }: { mvid: number }): AxiosPromise => {
  const params = {
    timestamp: new Date().getTime(),
    mvid
  };

  return axios.request({
    url: '/mv/detail',
    method: 'get',
    params
  });
};

/**
 * @description 获取mv播放地址
 * @param { Number } timestamp - 防止接口缓存
 * @param { Number } id - mvid
 */
export const mvUrl = ({ id }: { id: number }): AxiosPromise => {
  const params = {
    timestamp: new Date().getTime(),
    id
  };

  return axios.request({
    url: '/mv/url',
    method: 'get',
    params
  });
};

type MvSub = {
  mvid: number;
  t: number;
};

/**
 * @description 收藏/取消收藏mv
 * @param { Number } timestamp - 防止接口缓存
 * @param { Number } mvid - mvid
 * @param { Number } t - 1: 收藏, 其他为取消收藏
 */
export const mvSub = ({ mvid, t }: MvSub): AxiosPromise => {
  const params = {
    timestamp: new Date().getTime(),
    mvid,
    t
  };

  return axios.request({
    url: '/mv/sub',
    method: 'get',
    params
  });
};
