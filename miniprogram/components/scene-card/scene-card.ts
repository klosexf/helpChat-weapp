import type { SceneType } from '../../types';

interface SceneCardProps {
  scene: SceneType;
  icon: string;
  title: string;
  description: string;
  selected: boolean;
}

Component({
  options: {
    styleIsolation: 'apply-shared',
    multipleSlots: true
  },
  properties: {
    scene: {
      type: String,
      value: 'workplace'
    },
    icon: {
      type: String,
      value: '💼'
    },
    title: {
      type: String,
      value: ''
    },
    description: {
      type: String,
      value: ''
    },
    selected: {
      type: Boolean,
      value: false
    }
  },

  methods: {
    handleTap() {
      this.triggerEvent('select', { scene: this.data.scene });
    }
  }
});
