/**
 * 聊天回复助手 - 意图分析卡片组件
 */

import type { IntentTypeCode } from '../../types/intent';

interface IData {
  colors: { bg: string; border: string; icon: string };
}

/** 意图类型颜色映射 */
const INTENT_TYPE_COLORS: Record<IntentTypeCode, { bg: string; border: string; icon: string }> = {
  probe: { bg: '#F0EDFA', border: '#8B7FD4', icon: '#8B7FD4' },
  complain: { bg: '#FDF2F2', border: '#E8A4A4', icon: '#E8A4A4' },
  request: { bg: '#E6F7FF', border: '#5BC0DE', icon: '#5BC0DE' },
  care: { bg: '#F0F9F4', border: '#7FD4A8', icon: '#7FD4A8' },
  chat: { bg: '#FFF8E6', border: '#F4C894', icon: '#F4C894' },
};

/**
 * 获取意图类型颜色
 * @param type 意图类型
 * @returns 颜色配置
 */
const getIntentTypeColor = (type: IntentTypeCode): { bg: string; border: string; icon: string } => {
  return INTENT_TYPE_COLORS[type] || INTENT_TYPE_COLORS.probe;
};

Component<IData, {}, {}>({
  options: {
    styleIsolation: 'apply-shared',
  },

  properties: {
    type: {
      type: String,
      value: 'probe',
    },
    typeLabel: {
      type: String,
      value: '试探',
    },
    description: {
      type: String,
      value: '',
    },
    icon: {
      type: String,
      value: 'search',
    },
  },

  data: {
    colors: { bg: '#F0EDFA', border: '#8B7FD4', icon: '#8B7FD4' },
  },

  lifetimes: {
    attached() {
      this.updateColors();
    },
  },

  observers: {
    type() {
      this.updateColors();
    },
  },

  methods: {
    /**
     * 更新颜色
     */
    updateColors() {
      const { type } = this.properties;
      const colors = getIntentTypeColor(type as IntentTypeCode);
      this.setData({ colors });
    },
  },
});
