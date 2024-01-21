<template>
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
  padding-top: -1em;
  padding: 1em;
}

.kwaliteiten {
  display: flex;
  gap: 0.5em;
  flex-direction: row;
  flex-wrap: wrap;
}

label {
  color: black;
  padding: 1em;
  /* border: 3px solid; */
  background-color: var(--secundary-blue-color);
  font-size: 1.5em;
  border-radius: 100px;
  text-align: center;
  align-content: center;
  width: fit-content;
}
</style>
