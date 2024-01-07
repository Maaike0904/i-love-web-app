<template>
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
        <a><NuxtLink to="/overmij">Over mij</NuxtLink></a>
      </li>
      <li>
        <a><NuxtLink to="/">Mijn werk</NuxtLink></a>
      </li>
      <li>
        <a
          ><NuxtLink to="/"><button>Contact</button></NuxtLink></a
        >
      </li>
    </ul>
  </nav>

  <h1>Over mij</h1>
  <main>
    <div class="kwaliteiten">
      <label>HTML</label>
      <label>CSS</label>
      <label>Javascript</label>
      <label>Sveltekit</label>
      <label>Eleventy</label>
      <label>Node.js</label>
      <label>Express</label>
      <label>Prismic</label>
      <label>Hygraph</label>
      <label>Accessibility</label>
      <label>Design</label>
      <label>UI</label>
      <label>UX</label>
      <label>Performance</label>
      <label>Progressive Enhancement</label>
      <label>Responsive design</label>
      <label>Semantiek</label>
      <label>DRY</label>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 1em;
  max-width: 50%;
}

.kwaliteiten {
  /* padding: 3em; */
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-auto-flow: row; */
}

label {
  color: var(--secundary-purple-color);
  padding: 1em;
  border: 3px solid;
  font-size: 2em;
  border-radius: 100px;
  text-align: center;
  align-content: center;
  width: fit-content;
}
</style>
