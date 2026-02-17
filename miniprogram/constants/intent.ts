/**
 * 聊天回复助手 - 意图分析常量配置
 */

import type { IntentTypeConfig, IntentTypeCode, IntentAnalysis } from '../types/intent';

/** 意图类型配置列表 */
export const INTENT_TYPE_CONFIGS: IntentTypeConfig[] = [
  {
    type: 'probe',
    label: '试探',
    description: '对方在试探你的态度或想法',
    icon: 'search',
    examples: ['你觉得呢？', '你不会生气了吧？', '你怎么想？']
  },
  {
    type: 'complain',
    label: '抱怨',
    description: '对方在表达不满或抱怨',
    icon: 'sentiment_dissatisfied',
    examples: ['这个方案你再想想', '我没事', '你怎么总是这样']
  },
  {
    type: 'request',
    label: '请求',
    description: '对方在请求帮助或信息',
    icon: 'help',
    examples: ['能帮我看看吗？', '在干嘛？', '有空吗？']
  },
  {
    type: 'care',
    label: '关心',
    description: '对方在表达关心',
    icon: 'favorite',
    examples: ['吃饭了吗？', '最近怎么样？', '注意休息']
  },
  {
    type: 'chat',
    label: '闲聊',
    description: '对方在闲聊打发时间',
    icon: 'chat',
    examples: ['今天天气不错', '在忙吗？', '哈哈哈']
  }
];

/** 意图类型颜色映射 */
export const INTENT_TYPE_COLORS: Record<IntentTypeCode, { bg: string; border: string; icon: string }> = {
  probe: { bg: '#F0EDFA', border: '#8B7FD4', icon: '#8B7FD4' },      // 试探 - 紫色系
  complain: { bg: '#FDF2F2', border: '#E8A4A4', icon: '#E8A4A4' },   // 抱怨 - 红色系
  request: { bg: '#E6F7FF', border: '#5BC0DE', icon: '#5BC0DE' },    // 请求 - 蓝色系
  care: { bg: '#F0F9F4', border: '#7FD4A8', icon: '#7FD4A8' },       // 关心 - 绿色系
  chat: { bg: '#FFF8E6', border: '#F4C894', icon: '#F4C894' }        // 闲聊 - 黄色系
};

/**
 * 获取意图类型配置
 * @param type 意图类型
 * @returns 意图类型配置
 */
export const getIntentTypeConfig = (type: IntentTypeCode): IntentTypeConfig | undefined => {
  return INTENT_TYPE_CONFIGS.find(config => config.type === type);
};

/**
 * 获取意图类型颜色
 * @param type 意图类型
 * @returns 颜色配置
 */
export const getIntentTypeColor = (type: IntentTypeCode): { bg: string; border: string; icon: string } => {
  return INTENT_TYPE_COLORS[type] || INTENT_TYPE_COLORS.probe;
};

/**
 * 创建意图分析对象
 * @param type 意图类型
 * @param description 详细描述
 * @returns 意图分析对象
 */
export const createIntentAnalysis = (
  type: IntentTypeCode,
  description: string
): IntentAnalysis => {
  const config = getIntentTypeConfig(type);
  return {
    type,
    typeLabel: config?.label || '未知',
    description,
    icon: config?.icon || 'help'
  };
};

/** 默认意图分析（用于初始化或错误状态） */
export const DEFAULT_INTENT_ANALYSIS: IntentAnalysis = {
  type: 'chat',
  typeLabel: '闲聊',
  description: '对方似乎在随意聊天，没有特别的意图',
  icon: 'chat'
};
