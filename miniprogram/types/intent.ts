/**
 * 聊天回复助手 - 意图分析相关类型定义
 */

/** 意图类型 */
export type IntentTypeCode =
  | 'probe'     // 试探
  | 'complain'  // 抱怨
  | 'request'   // 请求
  | 'care'      // 关心
  | 'chat';     // 闲聊

/** 意图分析结果 */
export interface IntentAnalysis {
  type: IntentTypeCode;
  typeLabel: string;
  description: string;
  icon: string;
}

/** 意图类型配置 */
export interface IntentTypeConfig {
  type: IntentTypeCode;
  label: string;
  description: string;
  icon: string;
  examples: string[];
}

/** 意图分析响应 */
export interface IntentAnalysisResponse {
  intent: IntentAnalysis;
  confidence: number;
  alternativeIntents?: IntentAnalysis[];
}
