<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <button class="back-to-top" type="button" aria-label="Back to top" @click="scrollToTop">↑</button>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  z-index: 10;
  right: 24px;
  bottom: 24px;
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background-color: rgba(0, 123, 112, 0.65);
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  box-shadow: 0 4px 14px rgb(16 45 64 / 22%);
  transition: background 160ms ease, transform 160ms ease;
}

.back-to-top:hover {
  transform: translateY(-3px);
  background: var(--navy);
}
</style>
