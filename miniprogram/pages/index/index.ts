import type { SceneType } from '../../types';

interface SceneConfig {
  type: SceneType;
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const SCENE_CONFIGS: SceneConfig[] = [
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

const getSceneConfig = (type: string): SceneConfig | undefined => {
  return SCENE_CONFIGS.find(config => config.type === type);
};

interface IndexData {
  scenes: typeof SCENE_CONFIGS;
  selectedScene: SceneType | null;
  currentSceneName: string;
  inputValue: string;
  canGenerate: boolean;
}

Component<{}, IndexData, {}>({
  data: {
    scenes: SCENE_CONFIGS,
    selectedScene: null,
    currentSceneName: '职场',
    inputValue: '',
    canGenerate: false
  },

  lifetimes: {
    attached() {
      // 默认选中第一个场景
      const defaultScene = SCENE_CONFIGS[0];
      this.setData({
        selectedScene: defaultScene.type,
        currentSceneName: defaultScene.title
      });
    }
  },

  methods: {
    onSceneToggle() {
      const { scenes, selectedScene } = this.data;
      
      // 找到当前选中的索引
      const currentIndex = scenes.findIndex(s => s.type === selectedScene);
      
      // 切换到下一个场景（循环）
      const nextIndex = (currentIndex + 1) % scenes.length;
      const nextScene = scenes[nextIndex];
      
      this.setData({
        selectedScene: nextScene.type,
        currentSceneName: nextScene.title
      });
      
      this.updateCanGenerate();
      
      // 显示切换提示
      wx.showToast({
        title: `已切换：${nextScene.title}`,
        icon: 'none',
        duration: 1000
      });
    },

    onInputChange(e: WechatMiniprogram.CustomEvent<{ value: string }>) {
      const { value } = e.detail;
      this.setData({ inputValue: value });
      this.updateCanGenerate();
    },

    onImageUpload(e: WechatMiniprogram.CustomEvent<{ filePath: string }>) {
      const { filePath } = e.detail;
      console.log('上传图片:', filePath);
      
      wx.showLoading({ title: '识别中...' });
      
      setTimeout(() => {
        wx.hideLoading();
        const mockText = '这是从截图中识别的文字内容（模拟）';
        this.setData({ inputValue: mockText });
        this.updateCanGenerate();
        
        wx.showToast({
          title: '识别成功',
          icon: 'success'
        });
      }, 1500);
    },

    updateCanGenerate() {
      const { selectedScene, inputValue } = this.data;
      const canGenerate = selectedScene !== null && inputValue.trim().length > 0;
      this.setData({ canGenerate });
    },

    onGenerate() {
      const { selectedScene, inputValue, canGenerate } = this.data;
      
      if (!canGenerate) {
        if (!inputValue.trim()) {
          wx.showToast({
            title: '请输入对方的消息',
            icon: 'none'
          });
        }
        return;
      }

      wx.navigateTo({
        url: `/pages/result/result?scene=${selectedScene}&input=${encodeURIComponent(inputValue)}`,
        fail: () => {
          wx.showToast({
            title: '页面跳转失败',
            icon: 'none'
          });
        }
      });
    },

    navigateToMine() {
      wx.showToast({
        title: '我的页面开发中',
        icon: 'none'
      });
    }
  }
});
