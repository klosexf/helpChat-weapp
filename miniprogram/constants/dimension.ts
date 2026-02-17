/**
 * 聊天回复助手 - 回复维度常量配置
 */

import type { ReplyDimension, DimensionType } from '../types/reply';

/** 维度颜色配置 */
export const DIMENSION_COLORS: Record<DimensionType, { bg: string; text: string }> = {
  formal: { bg: '#8B7FD4', text: '#FFFFFF' },      // 正式回应 - 紫色
  euphemistic: { bg: '#7FD4A8', text: '#FFFFFF' }, // 委婉询问 - 绿色
  proactive: { bg: '#5BC0DE', text: '#FFFFFF' },   // 主动汇报 - 蓝色
  humorous: { bg: '#F4A261', text: '#FFFFFF' },    // 幽默化解 - 橙色
  gentle: { bg: '#E8B4D9', text: '#FFFFFF' },      // 温柔体贴 - 粉色
  casual: { bg: '#B8B0E8', text: '#FFFFFF' },      // 轻松随意 - 浅紫
  sincere: { bg: '#C8E6D5', text: '#1A1A2E' },     // 真诚关心 - 薄荷绿
  emotional: { bg: '#F4C2C2', text: '#1A1A2E' },   // 高情商化解 - 珊瑚色
  refuse: { bg: '#9B9BAB', text: '#FFFFFF' },      // 恰到好处的拒绝 - 灰色
  straight: { bg: '#6B6B7B', text: '#FFFFFF' },    // 直率 - 深灰
  polite: { bg: '#B8B0E8', text: '#FFFFFF' }       // 礼貌 - 浅紫
};

/** 维度配置列表 */
export const DIMENSION_CONFIGS: ReplyDimension[] = [
  {
    key: 'formal',
    label: '正式回应',
    description: '得体专业的回复方式',
    bgColor: '#8B7FD4',
    textColor: '#FFFFFF'
  },
  {
    key: 'euphemistic',
    label: '委婉询问',
    description: '委婉表达不同意见',
    bgColor: '#7FD4A8',
    textColor: '#FFFFFF'
  },
  {
    key: 'proactive',
    label: '主动汇报',
    description: '展示积极工作态度',
    bgColor: '#5BC0DE',
    textColor: '#FFFFFF'
  },
  {
    key: 'humorous',
    label: '幽默化解',
    description: '轻松化解尴尬',
    bgColor: '#F4A261',
    textColor: '#FFFFFF'
  },
  {
    key: 'gentle',
    label: '温柔体贴',
    description: '表达关心和在意',
    bgColor: '#E8B4D9',
    textColor: '#FFFFFF'
  },
  {
    key: 'casual',
    label: '轻松随意',
    description: '自然放松的回复',
    bgColor: '#B8B0E8',
    textColor: '#FFFFFF'
  },
  {
    key: 'sincere',
    label: '真诚关心',
    description: '表达真实情感',
    bgColor: '#C8E6D5',
    textColor: '#1A1A2E'
  },
  {
    key: 'emotional',
    label: '高情商化解',
    description: '巧妙处理敏感话题',
    bgColor: '#F4C2C2',
    textColor: '#1A1A2E'
  },
  {
    key: 'refuse',
    label: '恰到好处的拒绝',
    description: '委婉但坚定的拒绝',
    bgColor: '#9B9BAB',
    textColor: '#FFFFFF'
  },
  {
    key: 'straight',
    label: '直率',
    description: '直接了当的回复',
    bgColor: '#6B6B7B',
    textColor: '#FFFFFF'
  },
  {
    key: 'polite',
    label: '礼貌',
    description: '礼貌得体的回复',
    bgColor: '#B8B0E8',
    textColor: '#FFFFFF'
  }
];

/** 场景维度映射 */
export const SCENE_DIMENSION_MAP: Record<string, string[]> = {
  workplace: ['formal', 'euphemistic', 'proactive', 'straight', 'polite'],
  romance: ['gentle', 'humorous', 'emotional', 'refuse', 'casual'],
  friend: ['casual', 'humorous', 'sincere', 'straight', 'polite']
};

/**
 * 获取维度配置
 * @param key 维度键值
 * @returns 维度配置
 */
export const getDimensionConfig = (key: string): ReplyDimension | undefined => {
  return DIMENSION_CONFIGS.find(config => config.key === key);
};

/**
 * 获取维度颜色
 * @param key 维度键值
 * @returns 颜色配置
 */
export const getDimensionColor = (key: string): { bg: string; text: string } => {
  return DIMENSION_COLORS[key as DimensionType] || { bg: '#8B7FD4', text: '#FFFFFF' };
};

/**
 * 获取场景对应的维度列表
 * @param scene 场景类型
 * @returns 维度键值列表
 */
export const getSceneDimensions = (scene: string): string[] => {
  return SCENE_DIMENSION_MAP[scene] || [];
};
