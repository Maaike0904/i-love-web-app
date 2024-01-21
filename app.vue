<script setup>
import { ref } from "vue";

const toggleContrast = () => {
  const button = document.querySelector(".contrast-toggle");
  button.classList.toggle("is-toggled");
  document.body.classList.toggle("is-high-contrast");
};
</script>

<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">
            <img src="public/logo-weloveweb.png" class="logo" alt="logo"
          /></NuxtLink>
        </li>
        <li>
          <a><NuxtLink to="/alleblogs">Alle blogs</NuxtLink></a>
        </li>
        <li>
          <a><NuxtLink to="/mijnwerk">Mijn werk</NuxtLink></a>
        </li>
        <li>
          <a><NuxtLink to="/overmij">Over mij</NuxtLink></a>
        </li>
        <li>
          <a
            ><NuxtLink to="/contact"><button>Contact</button></NuxtLink></a
          >
        </li>
        <li>
          <button class="contrast-toggle">
            <span>Toggle contrast</span>
          </button>
        </li>
      </ul>
    </nav>
    <NuxtPage />
  </div>
</template>

<style scoped>
.contrast-toggle {
  overflow: hidden;
  position: relative;
  display: block;
  width: 2em;
  height: 2em;
  margin: 2em auto;
  background: var(--primary-color);
  border: 0.1em solid var(--secundary-purple-color);
  border-radius: 50%;
  box-shadow: 0 0 1.5em 0.5em var(--primary-color);
  cursor: pointer;
  transform: translateZ(0);
  margin-right: 2em;
}
.contrast-toggle > span {
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
}

.contrast-toggle::before {
  content: "";
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--secundary-purple-color);
  transform: translateX(-50%);
  transition: transform 0.2s cubic-bezier(1, 1, 0, 1.3);
}

.contrast-toggle.is-toggled::before {
  transform: translateX(50%);
}
</style>
