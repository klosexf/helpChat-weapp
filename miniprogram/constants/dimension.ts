/**
 * 聊天回复助手 - 回复维度常量配置
 * 基于回复语气维度定义文档
 */

import type { ReplyDimension, DimensionType } from '../types/reply';

/** 维度颜色配置 */
export const DIMENSION_COLORS: Record<DimensionType, { bg: string; text: string }> = {
  formal: { bg: '#8B7FD4', text: '#FFFFFF' },
  polite: { bg: '#B8B0E8', text: '#FFFFFF' },
  straight: { bg: '#5BC0DE', text: '#FFFFFF' },
  humble: { bg: '#C8E6D5', text: '#1A1A2E' },
  gentle: { bg: '#E8B4D9', text: '#FFFFFF' },
  humorous: { bg: '#F4A261', text: '#FFFFFF' },
  emotional: { bg: '#F4C2C2', text: '#1A1A2E' },
  romantic: { bg: '#E8B4D9', text: '#FFFFFF' },
  casual: { bg: '#B8B0E8', text: '#FFFFFF' },
  funny: { bg: '#F4A261', text: '#FFFFFF' },
  sincere: { bg: '#7FD4A8', text: '#FFFFFF' },
  enthusiastic: { bg: '#FF8A65', text: '#FFFFFF' },
  euphemistic: { bg: '#7FD4A8', text: '#FFFFFF' },
  proactive: { bg: '#5BC0DE', text: '#FFFFFF' },
  refuse: { bg: '#9B9BAB', text: '#FFFFFF' },
};

/** 维度配置列表 */
export const DIMENSION_CONFIGS: ReplyDimension[] = [
  {
    key: 'formal',
    label: '专业严谨',
    description: '正式、克制',
    bgColor: '#8B7FD4',
    textColor: '#FFFFFF'
  },
  {
    key: 'polite',
    label: '礼貌委婉',
    description: '客气、周到',
    bgColor: '#B8B0E8',
    textColor: '#FFFFFF'
  },
  {
    key: 'straight',
    label: '直接了当',
    description: '高效、果断',
    bgColor: '#5BC0DE',
    textColor: '#FFFFFF'
  },
  {
    key: 'humble',
    label: '谦虚低调',
    description: '内敛、平和',
    bgColor: '#C8E6D5',
    textColor: '#1A1A2E'
  },
  {
    key: 'gentle',
    label: '温柔体贴',
    description: '暖心、关怀',
    bgColor: '#E8B4D9',
    textColor: '#FFFFFF'
  },
  {
    key: 'humorous',
    label: '幽默风趣',
    description: '轻松、有趣',
    bgColor: '#F4A261',
    textColor: '#FFFFFF'
  },
  {
    key: 'emotional',
    label: '高情商化解',
    description: '巧妙、得体',
    bgColor: '#F4C2C2',
    textColor: '#1A1A2E'
  },
  {
    key: 'romantic',
    label: '浪漫暧昧',
    description: '撩人、心动',
    bgColor: '#E8B4D9',
    textColor: '#FFFFFF'
  },
  {
    key: 'casual',
    label: '轻松随意',
    description: '自然、放松',
    bgColor: '#B8B0E8',
    textColor: '#FFFFFF'
  },
  {
    key: 'funny',
    label: '搞怪调侃',
    description: '有趣、俏皮',
    bgColor: '#F4A261',
    textColor: '#FFFFFF'
  },
  {
    key: 'sincere',
    label: '真诚关心',
    description: '实在、走心',
    bgColor: '#7FD4A8',
    textColor: '#FFFFFF'
  },
  {
    key: 'enthusiastic',
    label: '热情激动',
    description: '兴奋、活跃',
    bgColor: '#FF8A65',
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
    key: 'refuse',
    label: '恰到好处的拒绝',
    description: '委婉但坚定的拒绝',
    bgColor: '#9B9BAB',
    textColor: '#FFFFFF'
  },
];

/** 场景维度映射 */
export const SCENE_DIMENSION_MAP: Record<string, DimensionType[]> = {
  workplace: ['formal', 'polite', 'straight', 'humble', 'euphemistic', 'proactive'],
  romance: ['gentle', 'humorous', 'emotional', 'romantic', 'refuse'],
  friend: ['casual', 'funny', 'sincere', 'enthusiastic'],
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
export const getSceneDimensions = (scene: string): DimensionType[] => {
  return SCENE_DIMENSION_MAP[scene] || [];
};
