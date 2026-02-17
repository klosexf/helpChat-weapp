/**
 * 聊天回复助手 - 回复卡片组件
 */

import type { DimensionType } from '../../types/reply';

interface IData {
  dimensionColor: { bg: string; text: string };
  isCopied: boolean;
}

/** 维度颜色配置 */
const DIMENSION_COLORS: Record<DimensionType, { bg: string; text: string }> = {
  formal: { bg: '#8B7FD4', text: '#FFFFFF' },
  euphemistic: { bg: '#7FD4A8', text: '#FFFFFF' },
  proactive: { bg: '#5BC0DE', text: '#FFFFFF' },
  humorous: { bg: '#F4A261', text: '#FFFFFF' },
  gentle: { bg: '#E8B4D9', text: '#FFFFFF' },
  casual: { bg: '#B8B0E8', text: '#FFFFFF' },
  sincere: { bg: '#C8E6D5', text: '#1A1A2E' },
  emotional: { bg: '#F4C2C2', text: '#1A1A2E' },
  refuse: { bg: '#9B9BAB', text: '#FFFFFF' },
  straight: { bg: '#6B6B7B', text: '#FFFFFF' },
  polite: { bg: '#B8B0E8', text: '#FFFFFF' },
};

/**
 * 获取维度颜色
 * @param key 维度键值
 * @returns 颜色配置
 */
const getDimensionColor = (key: string): { bg: string; text: string } => {
  return DIMENSION_COLORS[key as DimensionType] || { bg: '#8B7FD4', text: '#FFFFFF' };
};

Component<IData, {}, {}>({
  options: {
    styleIsolation: 'apply-shared',
  },

  properties: {
    replyId: {
      type: String,
      value: '',
    },
    dimension: {
      type: String,
      value: '',
    },
    dimensionType: {
      type: String,
      value: 'formal',
    },
    content: {
      type: String,
      value: '',
    },
    isLatest: {
      type: Boolean,
      value: true,
    },
    isCopied: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    dimensionColor: { bg: '#8B7FD4', text: '#FFFFFF' },
    isCopied: false,
  },

  lifetimes: {
    attached() {
      this.updateDimensionColor();
    },
  },

  observers: {
    dimensionType() {
      this.updateDimensionColor();
    },
  },

  methods: {
    /**
     * 更新维度颜色
     */
    updateDimensionColor() {
      const { dimensionType } = this.properties;
      const color = getDimensionColor(dimensionType as string);
      this.setData({ dimensionColor: color });
    },

    /**
     * 处理复制点击
     */
    handleCopy() {
      const { replyId, content } = this.properties;
      this.triggerEvent('copy', { replyId, content });
    },

    /**
     * 处理卡片点击
     */
    handleCardTap() {
      const { replyId, content } = this.properties;
      this.triggerEvent('tap', { replyId, content });
    },
  },
});
