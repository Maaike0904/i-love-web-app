<template>
  <h1>Mijn werk</h1>

  <main>
    <article>
      <h2>Eleventy project</h2>
      <p></p>
    </article>

    <article>
      <h2>Random studio project</h2>
      <p></p>
    </article>
  </main>
</template>

<style scoped>
main {
  padding: 1em;
  display: grid;
  /*   grid-template-columns: repeat(2, 18em); */
  gap: 1em;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: dense;
}

li:first-child {
  margin-right: auto;
}

article {
  padding: 2em;
  /* border: 2px solid; */
  background-color: var(--secundary-green-color);
  border-radius: 20px;
}
h1 {
  padding-bottom: 1em;
}

h2 {
  padding-bottom: 0.5em;
}

@media (min-width: 900px) {
  h1 {
    padding: 1em;
  }
}
</style>
