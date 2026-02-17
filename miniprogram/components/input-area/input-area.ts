Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  
  properties: {
    value: {
      type: String,
      value: ''
    }
  },

  methods: {
    handleInput(e: WechatMiniprogram.TextareaInput) {
      const value = e.detail.value;
      this.triggerEvent('input', { value });
    },

    async handlePaste() {
      try {
        const res = await wx.getClipboardData();
        if (res.data) {
          const value = res.data.slice(0, 500);
          this.triggerEvent('input', { value });
          wx.showToast({
            title: '已粘贴',
            icon: 'success',
            duration: 1500
          });
        } else {
          wx.showToast({
            title: '剪贴板为空',
            icon: 'none',
            duration: 1500
          });
        }
      } catch {
        wx.showToast({
          title: '读取剪贴板失败',
          icon: 'none',
          duration: 1500
        });
      }
    },

    async handleUpload() {
      try {
        const res = await wx.chooseMedia({
          count: 1,
          mediaType: ['image'],
          sourceType: ['album']
        });
        
        if (res.tempFiles && res.tempFiles.length > 0) {
          const tempFilePath = res.tempFiles[0].tempFilePath;
          this.triggerEvent('upload', { filePath: tempFilePath });
          wx.showToast({
            title: '图片已选择',
            icon: 'success',
            duration: 1500
          });
        }
      } catch {
        wx.showToast({
          title: '选择图片失败',
          icon: 'none',
          duration: 1500
        });
      }
    }
  }
});
