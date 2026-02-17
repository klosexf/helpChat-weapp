/**
 * 聊天回复助手 - 语气调整弹框组件
 * 底部弹框，用于选择回复语气风格
 * 基于回复语气维度定义文档实现
 */

import type { DimensionType } from '../../types/reply';

/** 语气风格选项 */
interface ToneStyle {
  key: DimensionType;
  label: string;
  description: string;
  icon: string;
  applicableScenarios: string;
  languageFeatures: string;
}

/** 场景Tab配置 */
interface SceneTab {
  key: string;
  label: string;
  styles: ToneStyle[];
}

/** 职场场景语气维度 */
const WORKPLACE_STYLES: ToneStyle[] = [
  {
    key: 'formal',
    label: '正式专业型',
    description: '规范得体、体现素养',
    icon: 'work',
    applicableScenarios: '回复领导指示、正式工作沟通',
    languageFeatures: '使用敬语、句式完整、避免口语化'
  },
  {
    key: 'euphemistic',
    label: '委婉含蓄型',
    description: '柔和表达、避免冲突',
    icon: 'handshake',
    applicableScenarios: '拒绝要求、表达困难、提出异议',
    languageFeatures: '先肯定后转折、使用软化词、提供替代方案'
  },
  {
    key: 'enthusiastic',
    label: '积极热情型',
    description: '主动积极、传递正能量',
    icon: 'rocket',
    applicableScenarios: '接受新任务、表达工作热情',
    languageFeatures: '使用肯定句式、表达意愿决心、主动提出方案'
  },
  {
    key: 'humble',
    label: '谦逊请教型',
    description: '虚心态度、展现学习心态',
    icon: 'school',
    applicableScenarios: '任务不明确、需要指导、新人请教',
    languageFeatures: '使用请教语气、表达虚心态度、请求明确指示'
  },
  {
    key: 'rigorous',
    label: '严谨细致型',
    description: '注重细节、认真负责',
    icon: 'fact_check',
    applicableScenarios: '确认重要事项、汇报细节、风险提示',
    languageFeatures: '列举具体要点、使用数据支撑、逻辑清晰'
  },
  {
    key: 'concise',
    label: '简洁高效型',
    description: '精简文字、高效沟通',
    icon: 'bolt',
    applicableScenarios: '日常事务沟通、快速确认、紧急情况',
    languageFeatures: '句式简短、直奔主题、结论先行'
  },
  {
    key: 'apologetic',
    label: '诚恳道歉型',
    description: '真诚认错、表达改进',
    icon: 'error',
    applicableScenarios: '工作失误、延期交付、收到批评',
    languageFeatures: '直接承认问题、表达歉意、提出补救措施'
  },
  {
    key: 'cautious',
    label: '稳重谨慎型',
    description: '留有余地、成熟稳重',
    icon: 'shield',
    applicableScenarios: '评估风险、不确定事项、需要缓冲',
    languageFeatures: '使用"尽量""争取"、预留调整空间'
  },
  {
    key: 'proactive',
    label: '主动担当型',
    description: '主动承担、展现责任感',
    icon: 'assignment_turned_in',
    applicableScenarios: '项目推进、问题解决、团队协作',
    languageFeatures: '使用"我来负责"、主动提出方案、展现行动力'
  },
  {
    key: 'grateful',
    label: '感恩致谢型',
    description: '表达感谢、谦逊感恩',
    icon: 'favorite',
    applicableScenarios: '收到帮助、获得认可、工作指导',
    languageFeatures: '真诚表达感谢、说明感谢原因、语气温暖'
  },
  {
    key: 'suggestive',
    label: '建议提议型',
    description: '以建议方式、尊重决定权',
    icon: 'lightbulb',
    applicableScenarios: '提出想法、优化建议、方案讨论',
    languageFeatures: '使用"建议""可以考虑"、给出多个选项'
  },
  {
    key: 'reporting',
    label: '汇报陈述型',
    description: '客观陈述、便于了解',
    icon: 'description',
    applicableScenarios: '进度汇报、情况说明、信息同步',
    languageFeatures: '客观描述事实、结构化表达、语言平实准确'
  },
];

/** 异性场景语气维度 */
const ROMANCE_STYLES: ToneStyle[] = [
  {
    key: 'gentle',
    label: '温柔体贴型',
    description: '柔和温暖、表达关心',
    icon: 'favorite_border',
    applicableScenarios: '对方情绪低落、需要安慰、日常关心',
    languageFeatures: '使用柔和语气词、关注对方感受、语言温暖'
  },
  {
    key: 'humorous',
    label: '幽默风趣型',
    description: '轻松幽默、增加趣味',
    icon: 'sentiment_satisfied',
    applicableScenarios: '尴尬话题、冷场时刻、日常调侃',
    languageFeatures: '使用俏皮话梗、适度自嘲、语言轻松活泼'
  },
  {
    key: 'romantic',
    label: '撩人暧昧型',
    description: '适度表达好感、制造心动',
    icon: 'auto_awesome',
    applicableScenarios: '暧昧期、想增进感情、制造心动时刻',
    languageFeatures: '若即若离表达、适度赞美、制造期待感'
  },
  {
    key: 'emotional',
    label: '高情商化解型',
    description: '巧妙处理、避免冲突',
    icon: 'psychology',
    applicableScenarios: '试探性问题、送命题、敏感话题',
    languageFeatures: '避开陷阱、转移焦点、化解尴尬'
  },
  {
    key: 'sincere',
    label: '真诚直白型',
    description: '坦诚表达、不拐弯抹角',
    icon: 'record_voice_over',
    applicableScenarios: '表白心意、澄清误会、认真沟通',
    languageFeatures: '直接表达、真诚不做作、语言朴实真挚'
  },
  {
    key: 'playful',
    label: '调皮撒娇型',
    description: '可爱调皮、增加亲密感',
    icon: 'child_care',
    applicableScenarios: '日常互动、想要关注、请求帮助',
    languageFeatures: '使用叠词语气词、适度示弱、语言俏皮'
  },
  {
    key: 'patient',
    label: '耐心解释型',
    description: '认真解释、消除误会',
    icon: 'forum',
    applicableScenarios: '产生误会、需要澄清、对方不理解',
    languageFeatures: '语气平和、逐条解释、强调在乎'
  },
  {
    key: 'polite_refuse',
    label: '礼貌拒绝型',
    description: '得体拒绝、不伤感情',
    icon: 'block',
    applicableScenarios: '不想答应请求、需要拒绝、保持边界',
    languageFeatures: '先感谢后拒绝、给出合理理由、语气委婉'
  },
  {
    key: 'comforting',
    label: '情绪安抚型',
    description: '给予安抚、提供安全感',
    icon: 'volunteer_activism',
    applicableScenarios: '对方生气、情绪波动、需要安慰',
    languageFeatures: '先认同情绪、表达理解、给予安全感'
  },
  {
    key: 'empathetic',
    label: '共情理解型',
    description: '换位思考、拉近距离',
    icon: 'diversity_3',
    applicableScenarios: '对方倾诉、需要理解、情感共鸣',
    languageFeatures: '表达理解、认同感受、语言有共鸣感'
  },
  {
    key: 'poetic',
    label: '浪漫诗意型',
    description: '浪漫诗意、营造氛围',
    icon: 'local_florist',
    applicableScenarios: '特殊日子、表白、制造浪漫',
    languageFeatures: '使用比喻意象、语言优美、情感细腻'
  },
  {
    key: 'rational',
    label: '理性沟通型',
    description: '冷静理性、寻求方案',
    icon: 'balance',
    applicableScenarios: '争吵后、意见分歧、需要解决问题',
    languageFeatures: '语气平和、就事论事、提出解决方案'
  },
];

/** 朋友场景语气维度 */
const FRIEND_STYLES: ToneStyle[] = [
  {
    key: 'casual',
    label: '轻松随意型',
    description: '自然随性、不做作',
    icon: 'sentiment_satisfied_alt',
    applicableScenarios: '日常闲聊、轻松话题、熟人互动',
    languageFeatures: '口语化表达、句式简短、语言接地气'
  },
  {
    key: 'teasing',
    label: '调侃互怼型',
    description: '开玩笑吐槽、增进感情',
    icon: 'emoji_emotions',
    applicableScenarios: '熟人互动、打趣、日常调侃',
    languageFeatures: '使用网络流行语、适度损人、语言有梗'
  },
  {
    key: 'caring',
    label: '真诚关心型',
    description: '真心实意、友谊温度',
    icon: 'volunteer_activism',
    applicableScenarios: '朋友遇到困难、需要支持、重要时刻',
    languageFeatures: '表达在意、主动询问、提供帮助、语言温暖'
  },
  {
    key: 'excited',
    label: '热情激动型',
    description: '充满激情、表达喜悦',
    icon: 'celebration',
    applicableScenarios: '好消息、有趣话题、激动时刻',
    languageFeatures: '使用感叹号、夸张表达、情绪外露'
  },
  {
    key: 'venting',
    label: '吐槽宣泄型',
    description: '一起吐槽、释放情绪',
    icon: 'campaign',
    applicableScenarios: '遇到烦心事、需要倾诉、八卦吐槽',
    languageFeatures: '情绪化表达、使用吐槽用语、夸张描述'
  },
  {
    key: 'cute',
    label: '搞怪卖萌型',
    description: '搞怪可爱、增加趣味',
    icon: 'pets',
    applicableScenarios: '轻松话题、活跃气氛、日常互动',
    languageFeatures: '使用表情包式语言、夸张搞怪、卖萌语气'
  },
  {
    key: 'advising',
    label: '认真建议型',
    description: '真诚靠谱、展现责任感',
    icon: 'tips_and_updates',
    applicableScenarios: '朋友求助、需要意见、重要决定',
    languageFeatures: '语气认真、分析利弊、给出具体建议'
  },
  {
    key: 'resonating',
    label: '情绪共鸣型',
    description: '情感共鸣、理解支持',
    icon: 'groups',
    applicableScenarios: '朋友倾诉、需要安慰、情感交流',
    languageFeatures: '表达理解、认同感受、同仇敌忾'
  },
  {
    key: 'inviting',
    label: '邀约热情型',
    description: '热情邀请、积极态度',
    icon: 'event',
    applicableScenarios: '约饭、聚会、活动邀约',
    languageFeatures: '语气热情、积极响应、表达期待'
  },
  {
    key: 'gossiping',
    label: '八卦分享型',
    description: '分享八卦、增进互动',
    icon: 'chat_bubble',
    applicableScenarios: '八卦时间、分享趣闻、日常话题',
    languageFeatures: '语气神秘、制造悬念、语言有趣'
  },
  {
    key: 'asking_help',
    label: '求助信任型',
    description: '寻求帮助、展现信任',
    icon: 'help',
    applicableScenarios: '需要帮忙、借用物品、寻求支持',
    languageFeatures: '直接表达需求、语气诚恳、表达感谢'
  },
  {
    key: 'nostalgic',
    label: '怀旧感慨型',
    description: '回忆过去、增进连接',
    icon: 'history',
    applicableScenarios: '老友聊天、回忆往事、感慨时刻',
    languageFeatures: '语气感性、回忆细节、表达怀念'
  },
];

/** 场景Tab配置数据 */
const SCENE_TABS: SceneTab[] = [
  {
    key: 'workplace',
    label: '职场社交',
    styles: WORKPLACE_STYLES,
  },
  {
    key: 'romance',
    label: '恋爱话术',
    styles: ROMANCE_STYLES,
  },
  {
    key: 'friend',
    label: '朋友聊天',
    styles: FRIEND_STYLES,
  },
];

interface IData {
  visible: boolean;
  safeAreaBottom: number;
  currentTabKey: string;
  tabs: SceneTab[];
  selectedStyleKey: string;
  currentStyles: ToneStyle[];
}

Component<IData, {}, {}>({
  options: {
    styleIsolation: 'apply-shared',
  },

  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer: 'handleVisibleChange',
    },
    scene: {
      type: String,
      value: 'workplace',
      observer: 'handleSceneChange',
    },
    selectedDimension: {
      type: String,
      value: '',
      observer: 'handleDimensionChange',
    },
  },

  data: {
    visible: false,
    safeAreaBottom: 0,
    currentTabKey: 'workplace',
    tabs: SCENE_TABS,
    selectedStyleKey: '',
    currentStyles: WORKPLACE_STYLES,
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
     * 处理可见状态变化
     */
    handleVisibleChange(visible: boolean) {
      if (visible) {
        this.initializeSelection();
      }
    },

    /**
     * 处理场景变化
     */
    handleSceneChange(scene: string) {
      const tabIndex = SCENE_TABS.findIndex(tab => tab.key === scene);
      if (tabIndex >= 0) {
        const tab = SCENE_TABS[tabIndex];
        this.setData({
          currentTabKey: scene,
          currentStyles: tab.styles,
        });
      }
    },

    /**
     * 处理维度变化
     */
    handleDimensionChange(dimension: string) {
      if (dimension) {
        this.setData({ selectedStyleKey: dimension });
      }
    },

    /**
     * 初始化选择状态
     */
    initializeSelection() {
      const { scene, selectedDimension } = this.properties;
      const tabIndex = SCENE_TABS.findIndex(tab => tab.key === scene);
      const tab = tabIndex >= 0 ? SCENE_TABS[tabIndex] : SCENE_TABS[0];

      let selectedKey = selectedDimension as string;
      if (!selectedKey && tab.styles.length > 0) {
        selectedKey = tab.styles[0].key;
      }

      this.setData({
        currentTabKey: scene,
        currentStyles: tab.styles,
        selectedStyleKey: selectedKey,
      });
    },

    /**
     * 处理Tab切换
     */
    handleTabTap(e: WechatMiniprogram.TouchEvent) {
      const { key } = e.currentTarget.dataset as { key: string };
      const tabIndex = SCENE_TABS.findIndex(tab => tab.key === key);

      if (tabIndex >= 0) {
        const tab = SCENE_TABS[tabIndex];
        this.setData({
          currentTabKey: key,
          currentStyles: tab.styles,
          selectedStyleKey: tab.styles[0]?.key || '',
        });
      }
    },

    /**
     * 处理风格选择
     */
    handleStyleTap(e: WechatMiniprogram.TouchEvent) {
      const { key } = e.currentTarget.dataset as { key: string };
      this.setData({ selectedStyleKey: key });
    },

    /**
     * 处理关闭弹框
     */
    handleClose() {
      this.triggerEvent('close');
    },

    /**
     * 处理遮罩点击
     */
    handleMaskTap() {
      this.triggerEvent('close');
    },

    /**
     * 处理确认应用
     */
    handleConfirm() {
      const { selectedStyleKey, currentTabKey, currentStyles } = this.data;
      const selectedStyle = currentStyles.find(style => style.key === selectedStyleKey);

      if (selectedStyle) {
        this.triggerEvent('confirm', {
          scene: currentTabKey,
          dimension: selectedStyleKey,
          label: selectedStyle.label,
          description: selectedStyle.description,
        });
      }
    },

    /**
     * 阻止内容区点击事件冒泡
     */
    handleContentTap() {
      // 阻止事件冒泡，防止点击内容区时关闭弹框
    },

    /**
     * 阻止滚动穿透
     */
    preventTouchMove() {
      // 空函数，阻止滚动穿透
    },
  },
});
