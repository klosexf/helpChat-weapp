/**
 * 聊天回复助手 - 回复相关类型定义
 */

/** 回复维度类型 */
export type DimensionType =
  | 'formal'      // 正式回应
  | 'euphemistic' // 委婉询问
  | 'proactive'   // 主动汇报
  | 'humorous'    // 幽默化解
  | 'gentle'      // 温柔体贴
  | 'casual'      // 轻松随意
  | 'sincere'     // 真诚关心
  | 'emotional'   // 高情商化解
  | 'refuse'      // 恰到好处的拒绝
  | 'straight'    // 直率
  | 'polite';     // 礼貌

/** 回复项 */
export interface Reply {
  id: string;
  dimension: string;
  dimensionType: DimensionType;
  content: string;
  isSelected: boolean;
  isLatest: boolean;
}

/** 回复维度配置 */
export interface ReplyDimension {
  key: DimensionType;
  label: string;
  description: string;
  bgColor: string;
  textColor: string;
}

/** 历史回复记录 */
export interface ReplyHistory {
  generationId: number;
  timestamp: number;
  replies: Reply[];
}

/** 维度筛选状态 */
export interface DimensionFilter {
  dimensionType: DimensionType;
  isActive: boolean;
}

/** 复制状态 */
export interface CopyState {
  replyId: string;
  isCopied: boolean;
  timestamp: number;
}
