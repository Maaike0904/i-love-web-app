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
  <main>
    <!-- <div class="card-1">Ischa Gast</div> -->
    <h1>WE LOVE WEB <br />PORTFOLIO</h1>
    <div class="projects">
      <button class="blog-button">Ischa Gast</button>
      <button class="project-button">Eleventy project</button>
      <button class="blog-button">Tim Borst</button>
      <button class="project-button">Random Studio project</button>
    </div>
    <h1 class="name-homepage">Maaike<br />Verplancke</h1>
  </main>
</template>

<script setup></script>

<style scoped>
/* MOBIEL */
/* Navigation */

/* Main */
h1.name-homepage {
  text-align: right;
  /* width: 100vw; */
  padding-top: 1em;
}

.projects {
  padding: 1.2em;
  align-items: center;
}

.blog-button {
  background-color: var(--secundary-purple-color);
  color: white;
  padding: 0.5em 1em;
  border-radius: 150px;
  border: 3px solid;
  border-color: var(--secundary-purple-color);
  box-shadow: -5px 5px 35px 1px rgb(188, 188, 188);

  font-family: "Unbounded", sans-serif;
  text-decoration: none;
  font-size: 2rem;
  cursor: pointer;
  transform: rotate(5deg);
}

.project-button {
  background-color: var(--secundary-green-color);
  color: white;

  padding: 0.5em 1em;
  border-radius: 150px;
  border: 3px solid;
  border-color: var(--secundary-green-color);
  box-shadow: -5px 5px 35px 1px rgb(188, 188, 188);

  font-family: "Unbounded", sans-serif;
  text-decoration: none;
  font-size: 2rem;
  cursor: pointer;
  transform: rotate(-5deg);
}

@media (min-width: 500px) {
  li:first-child {
    margin-right: auto;
  }
  /* Main */
  h1 {
    font-size: 5em;
    line-height: 87px; /* 101.361% */
  }
}

@media (min-width: 900px) {
  h1 {
    width: 100vw;
    height: 100%;

    color: #000;
    font-family: "Unbounded", sans-serif;
    font-size: 8em;
    font-weight: 700;
    line-height: 149px; /* 101.361% */
    text-transform: uppercase;
  }

  h1.name-homepage {
    text-align: right;
    /* width: 100vw; */
    margin-top: -1.2em;
  }

  .projects {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 2.8em;
    margin-top: -3.5em;
  }

  .blog-button:hover {
    color: var(--secundary-purple-color);
    background: none;
  }

  .blog-button {
    display: inline-block;
    font-size: 2.5rem;
  }

  .project-button:hover {
    color: var(--secundary-green-color);
    background: none;
  }

  .project-button {
    display: inline-block;
    font-size: 2.5rem;
  }
}
</style>
