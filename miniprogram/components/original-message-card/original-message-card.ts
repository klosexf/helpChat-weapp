/**
 * 聊天回复助手 - 原始消息卡片组件
 */

import type { SceneType } from '../../types/scene';

interface IData {
  sceneLabel: string;
  sceneIcon: string;
  timeAgo: string;
}

const SCENE_MAP: Record<SceneType, { label: string; icon: string }> = {
  workplace: { label: '职场', icon: '💼' },
  romance: { label: '异性', icon: '💕' },
  friend: { label: '朋友', icon: '🤝' },
};

Component<IData, {}, {}>({
  options: {
    styleIsolation: 'apply-shared',
  },

  properties: {
    content: {
      type: String,
      value: '',
    },
    scene: {
      type: String,
      value: 'workplace',
    },
    source: {
      type: String,
      value: '微信',
    },
    timestamp: {
      type: Number,
      value: Date.now(),
    },
  },

  data: {
    sceneLabel: '职场',
    sceneIcon: '💼',
    timeAgo: '刚刚',
  },

  lifetimes: {
    attached() {
      this.updateSceneInfo();
      this.updateTimeAgo();
    },
  },

  observers: {
    scene() {
      this.updateSceneInfo();
    },
    timestamp() {
      this.updateTimeAgo();
    },
  },

  methods: {
    /**
     * 更新场景信息
     */
    updateSceneInfo() {
      const { scene } = this.properties;
      const sceneInfo = SCENE_MAP[scene as SceneType] || SCENE_MAP.workplace;
      this.setData({
        sceneLabel: sceneInfo.label,
        sceneIcon: sceneInfo.icon,
      });
    },

    /**
     * 更新时间显示
     */
    updateTimeAgo() {
      const { timestamp } = this.properties;
      const now = Date.now();
      const diff = now - timestamp;

      let timeAgo = '刚刚';
      const minute = 60 * 1000;
      const hour = 60 * minute;
      const day = 24 * hour;

      if (diff < minute) {
        timeAgo = '刚刚';
      } else if (diff < hour) {
        timeAgo = `${Math.floor(diff / minute)}分钟前`;
      } else if (diff < day) {
        timeAgo = `${Math.floor(diff / hour)}小时前`;
      } else {
        timeAgo = `${Math.floor(diff / day)}天前`;
      }

      this.setData({ timeAgo });
    },
  },
});
