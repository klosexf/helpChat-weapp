/* 聊天回复助手 - 类型定义 */

export type SceneType = 'workplace' | 'romance' | 'friend';

export interface SceneConfig {
  type: SceneType;
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export interface IntentType {
  type: 'probe' | 'complain' | 'request' | 'care' | 'chat';
  label: string;
  description: string;
}

export interface Reply {
  id: string;
  dimension: string;
  content: string;
  isSelected: boolean;
}

export interface ReplyDimension {
  key: string;
  label: string;
  description: string;
}

export interface UsageRecord {
  id: string;
  scene: SceneType;
  inputType: 'text' | 'image';
  inputContent: string;
  intentAnalysis: string;
  replies: Reply[];
  selectedReply: string | null;
  createTime: number;
}

export interface UserInfo {
  id: string;
  openid: string;
  nickname: string;
  avatar: string;
  createTime: number;
  lastLoginTime: number;
  usageCount: number;
}

export interface AIResponse {
  intent: {
    type: string;
    description: string;
  };
  replies: Array<{
    dimension: string;
    content: string;
  }>;
}

export interface ComponentResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}
