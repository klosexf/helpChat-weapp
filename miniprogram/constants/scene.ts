/* 聊天回复助手 - 场景常量配置 */

import type { SceneConfig, ReplyDimension } from '../types';

export const SCENE_CONFIGS: SceneConfig[] = [
  {
    type: 'workplace',
    icon: '💼',
    title: '职场',
    description: '正式得体',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    type: 'romance',
    icon: '💕',
    title: '异性',
    description: '情绪价值',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    type: 'friend',
    icon: '🤝',
    title: '朋友',
    description: '轻松有趣',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
];

export const SCENE_DIMENSIONS: Record<string, ReplyDimension[]> = {
  workplace: [
    { key: 'formal', label: '正式回应', description: '得体专业的回复方式' },
    { key: 'euphemistic', label: '委婉拒绝', description: '委婉表达不同意见' },
    { key: 'clarify', label: '请求澄清', description: '主动了解对方意图' },
    { key: 'proactive', label: '主动汇报', description: '展示积极工作态度' }
  ],
  romance: [
    { key: 'gentle', label: '温柔体贴', description: '表达关心和在意' },
    { key: 'humorous', label: '幽默风趣', description: '轻松化解尴尬' },
    { key: 'emotional', label: '高情商化解', description: '巧妙处理敏感话题' },
    { key: 'refuse', label: '恰到好处的拒绝', description: '委婉但坚定的拒绝' }
  ],
  friend: [
    { key: 'casual', label: '轻松随意', description: '自然放松的回复' },
    { key: 'humorous', label: '幽默调侃', description: '有趣的互动方式' },
    { key: 'sincere', label: '真诚关心', description: '表达真实情感' }
  ]
};

export const INTENT_TYPES = [
  { type: 'probe', label: '试探', description: '对方在试探你的态度或想法' },
  { type: 'complain', label: '抱怨', description: '对方在表达不满或抱怨' },
  { type: 'request', label: '请求', description: '对方在请求帮助或信息' },
  { type: 'care', label: '关心', description: '对方在表达关心' },
  { type: 'chat', label: '闲聊', description: '对方在闲聊打发时间' }
];

export const getSceneConfig = (type: string): SceneConfig | undefined => {
  return SCENE_CONFIGS.find(config => config.type === type);
};

export const getSceneDimensions = (type: string): ReplyDimension[] => {
  return SCENE_DIMENSIONS[type] || [];
};
