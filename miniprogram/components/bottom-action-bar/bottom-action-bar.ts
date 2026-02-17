/**
 * 聊天回复助手 - 底部操作栏组件
 */

interface IData {
  safeAreaBottom: number;
}

Component<IData, {}, {}>({
  options: {
    styleIsolation: 'apply-shared',
  },

  properties: {
    isLoading: {
      type: Boolean,
      value: false,
    },
    regenerateText: {
      type: String,
      value: '重新生成建议',
    },
  },

  data: {
    safeAreaBottom: 0,
  },

  lifetimes: {
    attached() {
      this.calculateSafeArea();
    },
  },

  methods: {
    /**
     * 计算安全区高度
     */
    calculateSafeArea() {
      const windowInfo = wx.getWindowInfo();
      const safeAreaBottom = windowInfo.safeArea
        ? windowInfo.screenHeight - windowInfo.safeArea.bottom
        : 0;
      this.setData({ safeAreaBottom });
    },

    /**
     * 处理重新生成
     */
    handleRegenerate() {
      if (this.properties.isLoading) return;
      this.triggerEvent('regenerate');
    },

    /**
     * 处理语气调整
     */
    handleToneAdjust() {
      this.triggerEvent('toneAdjust');
    },
  },
});
