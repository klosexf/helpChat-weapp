/**
 * 聊天回复助手 - 历史建议区域组件
 */

import type { ReplyHistory } from '../../types/reply';

interface IData {
  isExpanded: boolean;
}

Component<IData, {}, {}>({
  options: {
    styleIsolation: 'apply-shared',
  },

  properties: {
    historyList: {
      type: Array,
      value: [] as ReplyHistory[],
    },
  },

  data: {
    isExpanded: false,
  },

  methods: {
    /**
     * 切换展开/收起状态
     */
    toggleExpand() {
      const newState = !this.data.isExpanded;
      this.setData({ isExpanded: newState });
      this.triggerEvent('expandChange', { isExpanded: newState });
    },

    /**
     * 处理复制历史回复
     */
    handleCopyHistory(e: WechatMiniprogram.TouchEvent) {
      const { replyId, content } = e.detail;
      this.triggerEvent('copy', { replyId, content });
    },
  },
});
