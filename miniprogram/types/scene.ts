/**
 * 聊天回复助手 - 场景相关类型定义
 */

/** 场景类型 */
export type SceneType = 'workplace' | 'romance' | 'friend';

/** 场景配置 */
export interface SceneConfig {
  type: SceneType;
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

/** 场景维度映射 */
export interface SceneDimensionMap {
  scene: SceneType;
  dimensions: string[];
}

/** 原始消息 */
export interface OriginalMessage {
  content: string;
  scene: SceneType;
  source: string;
  timestamp: number;
}

/** 场景显示信息 */
export interface SceneDisplayInfo {
  scene: SceneType;
  sceneLabel: string;
  sceneIcon: string;
  timeAgo: string;
}
