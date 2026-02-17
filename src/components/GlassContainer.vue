<template>
  <div
    class="frosted-glass-container"
    :style="containerStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GlassContainer',
  props: {
    width: {
      type: String,
      default: 'auto' // Default to 'auto' for fitting content
    },
    height: {
      type: String,
      default: 'auto' // Default to 'auto' for fitting content
    },
    block: {
      type: String,
      default: 'inline-block' // Default to inline-block for fitting content
    }
  },
  computed: {
    containerStyle() {
      return {
        width: this.width,
        height: this.height,
        display: this.block // Use inline-block by default
      };
    }
  }
}
</script>

<style scoped>
.frosted-glass-container {
  background-image: url('../assets/nnnoise.svg');
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(3px);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 20px;
  position: relative;
  z-index: 1;
  min-width: min-content;
  min-height: min-content;
  transition: width 0.3s ease, height 0.3s ease;
}

.frosted-glass-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent 20%,
    rgba(255,255,255,0.1) 25%,
    transparent 30%
  );
  z-index: -1;
  filter: blur(5px);
  border-radius: inherit;
}

/* Ensure content inside the container behaves correctly */
.frosted-glass-container > * {
  position: relative;
  z-index: 2;
}
</style>
