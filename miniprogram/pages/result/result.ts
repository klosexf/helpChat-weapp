/**
 * 聊天回复助手 - 结果页面
 * 展示意图分析和回复建议
 */

import type { Reply, ReplyHistory } from '../../types/reply';
import type { IntentAnalysis, IntentTypeCode } from '../../types/intent';
import type { OriginalMessage } from '../../types/scene';

/** 默认意图分析（用于初始化或错误状态） */
const DEFAULT_INTENT_ANALYSIS: IntentAnalysis = {
  type: 'chat',
  typeLabel: '闲聊',
  description: '对方似乎在随意聊天，没有特别的意图',
  icon: 'chat',
};

/** 意图类型颜色映射 */
const INTENT_TYPE_COLORS: Record<IntentTypeCode, { bg: string; border: string; icon: string }> = {
  probe: { bg: '#F0EDFA', border: '#8B7FD4', icon: '#8B7FD4' },
  complain: { bg: '#FDF2F2', border: '#E8A4A4', icon: '#E8A4A4' },
  request: { bg: '#E6F7FF', border: '#5BC0DE', icon: '#5BC0DE' },
  care: { bg: '#F0F9F4', border: '#7FD4A8', icon: '#7FD4A8' },
  chat: { bg: '#FFF8E6', border: '#F4C894', icon: '#F4C894' },
};

interface IData {
  // 原始消息
  originalMessage: OriginalMessage;
  // 意图分析
  intentAnalysis: IntentAnalysis;
  // 最新回复列表
  latestReplies: Reply[];
  // 历史回复记录
  replyHistory: ReplyHistory[];
  // 当前生成次数
  generationCount: number;
  // 加载状态
  isLoading: boolean;
  // 重新生成按钮文字
  regenerateButtonText: string;
  // 复制状态
  copiedReplyId: string;
  // 导航栏高度
  statusBarHeight: number;
  navBarHeight: number;
  bottomBarHeight: number;
}

interface IQuery {
  scene?: string;
  message?: string;
  source?: string;
}

Component<IData, {}, {}>({
  options: {
    styleIsolation: 'apply-shared',
  },

  data: {
    originalMessage: {
      content: '',
      scene: 'workplace',
      source: '微信',
      timestamp: Date.now(),
    },
    intentAnalysis: DEFAULT_INTENT_ANALYSIS,
    latestReplies: [],
    replyHistory: [],
    generationCount: 1,
    isLoading: false,
    regenerateButtonText: '重新生成建议',
    copiedReplyId: '',
    statusBarHeight: 44,
    navBarHeight: 88,
    bottomBarHeight: 160,
  },

  lifetimes: {
    attached() {
      this.calculateSystemInfo();
      this.loadPageData();
    },
  },

  methods: {
    /**
     * 计算系统信息（导航栏高度等）
     */
    calculateSystemInfo() {
      const deviceInfo = wx.getDeviceInfo();
      const windowInfo = wx.getWindowInfo();
      const statusBarHeight = windowInfo.statusBarHeight || 44;
      const navBarHeight = 88; // 固定导航栏高度
      const bottomBarHeight = 160 + (windowInfo.safeArea
        ? windowInfo.screenHeight - windowInfo.safeArea.bottom
        : 0);

      this.setData({
        statusBarHeight,
        navBarHeight: statusBarHeight + navBarHeight,
        bottomBarHeight,
      });
    },

    /**
     * 加载页面数据
     */
    loadPageData() {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const query = (currentPage.options || {}) as IQuery;

      // 解析页面参数
      const message = query.message || query.input;
      if (message) {
        this.setData({
          'originalMessage.content': decodeURIComponent(message),
          'originalMessage.scene': (query.scene as 'workplace' | 'romance' | 'friend') || 'workplace',
          'originalMessage.source': query.source || '微信',
          'originalMessage.timestamp': Date.now(),
        });
      }

      // 模拟加载AI分析结果
      this.simulateAIResponse();
    },

    /**
     * 模拟AI响应（实际项目中应调用AI服务）
     */
    simulateAIResponse() {
      const { scene } = this.data.originalMessage;

      // 模拟意图分析
      const intentAnalysis: IntentAnalysis = {
        type: 'probe',
        typeLabel: '试探',
        description: '对方正在试探你的态度，在不显露山水的情况下确认你的想法。他们可能对某个话题感兴趣，但表现得比较谨慎。',
        icon: 'search',
      };

      // 根据场景生成不同的回复
      const latestReplies = this.generateMockReplies(scene);

      this.setData({
        intentAnalysis,
        latestReplies,
      });
    },

    /**
     * 生成模拟回复数据
     */
    generateMockReplies(scene: string): Reply[] {
      const mockData: Record<string, Reply[]> = {
        workplace: [
          {
            id: `reply_${Date.now()}_1`,
            dimension: '正式回应',
            dimensionType: 'formal',
            content: '好的领导，我再去细化一下方案，有问题我及时向您汇报。',
            isSelected: false,
            isLatest: true,
          },
          {
            id: `reply_${Date.now()}_2`,
            dimension: '委婉询问',
            dimensionType: 'euphemistic',
            content: '收到，领导您觉得哪个方向需要调整呢？我好针对性优化。',
            isSelected: false,
            isLatest: true,
          },
          {
            id: `reply_${Date.now()}_3`,
            dimension: '主动汇报',
            dimensionType: 'proactive',
            content: '好的，我整理几个优化方向下午跟您过一下可以吗？',
            isSelected: false,
            isLatest: true,
          },
        ],
        romance: [
          {
            id: `reply_${Date.now()}_1`,
            dimension: '温柔体贴',
            dimensionType: 'gentle',
            content: '怎么啦？看起来心情不太好，想聊聊吗？我在这儿陪着你。',
            isSelected: false,
            isLatest: true,
          },
          {
            id: `reply_${Date.now()}_2`,
            dimension: '幽默化解',
            dimensionType: 'humorous',
            content: '没事就好，有事的话我的肩膀借你靠靠（虽然隔着屏幕哈哈）',
            isSelected: false,
            isLatest: true,
          },
          {
            id: `reply_${Date.now()}_3`,
            dimension: '高情商化解',
            dimensionType: 'emotional',
            content: '我懂你的意思，有时候确实需要一点自己的空间。等你愿意说的时候我都在。',
            isSelected: false,
            isLatest: true,
          },
        ],
        friend: [
          {
            id: `reply_${Date.now()}_1`,
            dimension: '轻松随意',
            dimensionType: 'casual',
            content: '暂时还没定，你有什么好主意吗？或者我们去那家新开的餐厅看看？',
            isSelected: false,
            isLatest: true,
          },
          {
            id: `reply_${Date.now()}_2`,
            dimension: '幽默调侃',
            dimensionType: 'humorous',
            content: '我正在努力让自己看起来很忙，但其实我还没计划呢。你想约我吗？',
            isSelected: false,
            isLatest: true,
          },
          {
            id: `reply_${Date.now()}_3`,
            dimension: '真诚关心',
            dimensionType: 'sincere',
            content: '目前还没确定计划，你这周末有什么安排吗？可以一起出去走走。',
            isSelected: false,
            isLatest: true,
          },
        ],
      };

      return mockData[scene] || mockData.workplace;
    },

    /**
     * 返回上一页
     */
    handleGoBack() {
      wx.navigateBack({
        fail: () => {
          wx.switchTab({ url: '/pages/index/index' });
        },
      });
    },

    /**
     * 处理复制回复
     */
    handleCopyReply(e: WechatMiniprogram.TouchEvent) {
      const { replyId, content } = e.detail as { replyId: string; content: string };

      wx.setClipboardData({
        data: content,
        success: () => {
          this.setData({ copiedReplyId: replyId });

          // 显示复制成功提示
          wx.showToast({
            title: '已复制到剪贴板',
            icon: 'success',
            duration: 1500,
          });

          // 1.5秒后清除复制状态
          setTimeout(() => {
            this.setData({ copiedReplyId: '' });
          }, 1500);
        },
        fail: () => {
          wx.showToast({
            title: '复制失败，请重试',
            icon: 'error',
            duration: 1500,
          });
        },
      });
    },

    /**
     * 处理重新生成
     */
    handleRegenerate() {
      if (this.data.isLoading) return;

      const { generationCount, latestReplies } = this.data;

      // 保存当前回复到历史记录
      const historyItem: ReplyHistory = {
        generationId: generationCount,
        timestamp: Date.now(),
        replies: latestReplies.map(reply => ({ ...reply, isLatest: false })),
      };

      const newHistory = [...this.data.replyHistory, historyItem];

      this.setData({
        isLoading: true,
        regenerateButtonText: '生成中...',
        replyHistory: newHistory,
      });

      // 模拟重新生成延迟
      setTimeout(() => {
        const { scene } = this.data.originalMessage;
        const newReplies = this.generateMockReplies(scene).map(reply => ({
          ...reply,
          id: `reply_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        }));

        this.setData({
          latestReplies: newReplies,
          generationCount: generationCount + 1,
          isLoading: false,
          regenerateButtonText: '重新生成建议',
        });

        wx.showToast({
          title: '已生成新建议',
          icon: 'success',
          duration: 1500,
        });
      }, 1500);
    },

    /**
     * 处理语气调整
     */
    handleToneAdjust() {
      wx.showToast({
        title: '语气调整功能开发中',
        icon: 'none',
        duration: 1500,
      });
    },

    /**
     * 处理更多操作
     */
    handleMoreActions() {
      wx.showActionSheet({
        itemList: ['分享结果', '收藏回复', '举报问题'],
        success: (res) => {
          switch (res.tapIndex) {
            case 0:
              wx.showToast({ title: '分享功能开发中', icon: 'none' });
              break;
            case 1:
              wx.showToast({ title: '已收藏', icon: 'success' });
              break;
            case 2:
              wx.showToast({ title: '举报功能开发中', icon: 'none' });
              break;
          }
        },
      });
    },
  },
});
