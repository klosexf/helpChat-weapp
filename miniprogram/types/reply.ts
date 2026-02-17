/**
 * 聊天回复助手 - 回复相关类型定义
 * 基于回复语气维度定义文档
 */

/** 回复维度类型 - 完整36个语气维度 */
export type DimensionType =
  // 职场场景 (12个)
  | 'formal'         // 正式专业型
  | 'euphemistic'    // 委婉含蓄型
  | 'enthusiastic'   // 积极热情型
  | 'humble'         // 谦逊请教型
  | 'rigorous'       // 严谨细致型
  | 'concise'        // 简洁高效型
  | 'apologetic'     // 诚恳道歉型
  | 'cautious'       // 稳重谨慎型
  | 'proactive'      // 主动担当型
  | 'grateful'       // 感恩致谢型
  | 'suggestive'     // 建议提议型
  | 'reporting'      // 汇报陈述型
  // 异性场景 (12个)
  | 'gentle'         // 温柔体贴型
  | 'humorous'       // 幽默风趣型
  | 'romantic'       // 撩人暧昧型
  | 'emotional'      // 高情商化解型
  | 'sincere'        // 真诚直白型
  | 'playful'        // 调皮撒娇型
  | 'patient'        // 耐心解释型
  | 'polite_refuse'  // 礼貌拒绝型
  | 'comforting'     // 情绪安抚型
  | 'empathetic'     // 共情理解型
  | 'poetic'         // 浪漫诗意型
  | 'rational'       // 理性沟通型
  // 朋友场景 (12个)
  | 'casual'         // 轻松随意型
  | 'teasing'        // 调侃互怼型
  | 'caring'         // 真诚关心型
  | 'excited'        // 热情激动型
  | 'venting'        // 吐槽宣泄型
  | 'cute'           // 搞怪卖萌型
  | 'advising'       // 认真建议型
  | 'resonating'     // 情绪共鸣型
  | 'inviting'       // 邀约热情型
  | 'gossiping'      // 八卦分享型
  | 'asking_help'    // 求助信任型
  | 'nostalgic';     // 怀旧感慨型

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
  applicableScenarios?: string;
  languageFeatures?: string;
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
