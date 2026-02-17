<template>
    <div class="clickable-glass" >
      <GlassContainer
        :width="width"
        :height="height"
        :block="block"
        :class="{ 'glass-hovered': isHovered }"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        @click="toggleExpand"
        >
        <div class="title">{{ title }}</div>
        <div class="content" :class="{ 'expanded': isExpanded, 'collapsed': !isExpanded }" onclick="if (this.expandable) {event.stopPropagation()}">
          <slot />
        </div>
      </GlassContainer>
    </div>
  </template>
  
  <script>
  import GlassContainer from './GlassContainer.vue';
  
  export default {
    name: 'ClickableGlass',
    components: {
      GlassContainer,
    },
    props: {
      width: {
        type: String,
        default: 'auto',
      },
      height: {
        type: String,
        default: 'auto',
      },
      block: {
        type: String,
        default: "inline-block",
      },
      expandable: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: 'Placeholder',
      },
    },
    data() {
      return {
        isHovered: false,
        isExpanded: !this.expandable, // Start expanded if not expandable
      };
    },
    methods: {
      toggleExpand() {
        if (this.expandable) {
          this.isExpanded = !this.isExpanded;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  
  .frosted-glass-container {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.5s ease-out;
  }

  .glass-hovered {
    transform: scale(0.985);
  }
  
  .title {
    font-weight: bold;
    
    z-index: 2;
    position: relative;
  }
  
  .content {
    margin-top: 10px;
    overflow: hidden;
    opacity: 0;
  }
  
  .content.expanded {
    display: block;
    opacity: 1;
  }
  
  .content.collapsed {
    display: none;
    opacity: 0;
  }
  </style>
  
