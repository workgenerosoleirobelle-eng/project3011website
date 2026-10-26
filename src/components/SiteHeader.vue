<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ccsLogo from '../assets/images/CCSlogo.png'

const isMenuOpen = ref(false)
const programsMenu = ref(null)
const route = useRoute()

watch(() => route.fullPath, () => {
  isMenuOpen.value = false
  if (programsMenu.value) programsMenu.value.open = false
})

const programs = [
  { label: 'Information Technology', to: '/programs/bsit' },
  { label: 'Computer Science', to: '/programs/bscs' },
  { label: 'Digital Media & Interactive Arts', to: '/programs/bsdmia' },
  { label: 'Library & Information Science', to: '/programs/blis' },
]
</script>

<template>
  <header class="site-header">
    <div class="utility-bar">
      <div class="container utility-bar__inner">
        <span><a href="https://www.cpu.edu.ph/" target="_blank" rel="noopener noreferrer">Central Philippine University ↗</a></span>
      </div>
    </div>
    <div class="container header-main">
      <RouterLink class="brand" to="/" aria-label="CPU College of Computer Studies home">
        <img class="brand-mark" :src="ccsLogo" alt="CCS Logo" />
        <span class="brand-text">
          <strong>COLLEGE OF<br />COMPUTER STUDIES</strong>
          <small>Central Philippine University</small>
        </span>
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="primary-navigation"
        :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span><span></span><span></span>
      </button>

      <nav id="primary-navigation" class="primary-nav" :class="{ 'primary-nav--open': isMenuOpen }" aria-label="Main navigation">
        <RouterLink to="/" class="nav-link" exact-active-class="nav-link--active">Home</RouterLink>
        <RouterLink to="/about" class="nav-link" active-class="nav-link--active">About</RouterLink>
        <details ref="programsMenu" class="programs-menu">
          <summary>Programs <span class="caret" aria-hidden="true"></span></summary>
          <div class="programs-dropdown">
            <RouterLink v-for="program in programs" :key="program.to" :to="program.to">{{ program.label }}</RouterLink>
          </div>
        </details>
        <RouterLink to="/faculty" class="nav-link" active-class="nav-link--active">Faculty &amp; Staff</RouterLink>
        <RouterLink to="/news" class="nav-link" active-class="nav-link--active">News</RouterLink>
        <RouterLink to="/contact" class="nav-link nav-link--contact" active-class="nav-link--contact-active">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>

.site-header {
  position: sticky;
  z-index: 20;
  top: 0;
  background: #fff;
  box-shadow: 0 2px 15px rgb(16 45 64 / 7%);
}

.utility-bar {
  background: var(--navy);
  color: #c7d7dd;
  font-size: 12px;
  letter-spacing: 0.035em;
}

.utility-bar__inner {
  display: flex;
  min-height: 30px;
  align-items: center;
  justify-content: center;
}

.header-main {
  display: flex;
  width: calc(100% - 80px);
  min-height: 83px;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.brand {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 11px;
}

.brand-mark {
  width: 49px;
  height: 49px;
  object-fit: contain;
}

.brand-text {
  display: grid;
  gap: 4px;
}

.brand-text strong {
  color: var(--navy);
  font-family: var(--serif);
  font-size: 13px;
  letter-spacing: 0.045em;
  line-height: 1.3;
}

.brand-text small {
  color: #74848a;
  font-size: 11px;
}

.primary-nav {
  display: flex;
  align-items: center;
  gap: clamp(15px, 2vw, 28px);
}

.nav-link,
.programs-menu summary {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  color: #455960;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  transition: color 150ms ease;
}

.nav-link:hover,
.nav-link--active,
.programs-menu:hover summary,
.programs-menu[open] summary {
  color: var(--teal);
}

.programs-menu {
  position: relative;
}

.programs-menu summary {
  gap: 8px;
  list-style: none;
}

.programs-menu summary::-webkit-details-marker {
  display: none;
}

.caret {
  width: 7px;
  height: 7px;
  margin-top: -4px;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(45deg);
}

.programs-menu[open] .caret {
  margin-top: 4px;
  transform: rotate(225deg);
}

.programs-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: -16px;
  display: grid;
  width: 255px;
  gap: 2px;
  padding: 8px;
  border: 0;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 16px 38px rgb(16 45 64 / 13%);
}

.programs-dropdown a {
  padding: 11px 10px;
  border-radius: 4px;
  color: #40545c;
  font-size: 12px;
}

.programs-dropdown a:hover {
  background: var(--pale);
  color: var(--teal);
}

.nav-link--contact {
  min-height: 39px;
  padding: 0 15px;
  border-radius: 3px;
  background: var(--teal);
  color: #fff;
}

.nav-link--contact:hover,
.nav-link--contact-active {
  background: var(--navy);
  color: #fff;
}

.menu-toggle {
  display: none;
}

@media (max-width: 960px) {
  .header-main {
    gap: 18px;
  }

  .primary-nav {
    gap: 14px;
  }

  .nav-link,
  .programs-menu summary {
    font-size: 13px;
  }
}

@media (max-width: 760px) {
  .utility-bar__inner {
    min-height: 27px;
    font-size: 11px;
  }

  .header-main {
    position: relative;
    min-height: 72px;
  }

  .menu-toggle {
    display: grid;
    width: 42px;
    height: 42px;
    align-content: center;
    justify-items: center;
    gap: 5px;
    border: 1px solid var(--line);
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
  }

  .menu-toggle span {
    width: 18px;
    height: 2px;
    background: var(--navy);
  }

  .primary-nav {
    position: absolute;
    top: calc(100% - 1px);
    right: 0;
    left: 0;
    display: none;
    align-items: stretch;
    flex-direction: column;
    gap: 2px;
    padding: 12px 18px 18px;
    border-top: 1px solid var(--line);
    background: #fff;
    box-shadow: 0 15px 20px rgb(16 45 64 / 10%);
  }

  .primary-nav--open {
    display: flex;
  }

  .nav-link,
  .programs-menu summary {
    width: 100%;
    min-height: 42px;
    padding-inline: 4px;
    font-size: 13px;
  }

  .nav-link--contact {
    justify-content: center;
    margin-top: 6px;
  }

  .programs-dropdown {
    position: static;
    width: 100%;
    margin: 0 0 8px;
    box-shadow: none;
  }
}

@media (max-width: 380px) {
  .utility-bar__inner {
    gap: 8px;
    font-size: 10px;
  }

  .brand-text strong {
    font-size: 12px;
  }
}
</style>
