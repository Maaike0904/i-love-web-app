<template>
  <nav>
    <ul>
      <li>
        <a><NuxtLink to="/">Alle blogs</NuxtLink></a>
      </li>
      <li>
        <a><NuxtLink to="/">Over mij</NuxtLink></a>
      </li>
      <li>
        <a><NuxtLink to="/">Mijn werk</NuxtLink></a>
      </li>
      <li>
        <a
          ><NuxtLink to="/"><span>Contact</span></NuxtLink></a
        >
      </li>
    </ul>
  </nav>
  <main>
    <!-- <div class="card-1">Ischa Gast</div> -->
    <h1>WE LOVE WEB <br />PORTFOLIO</h1>
    <h1 class="name-homepage">Maaike<br />Verplancke</h1>
  </main>
</template>

<script setup></script>

<style scoped>
/* MOBIEL */
/* Navigation */
nav {
  width: 100vw;
  height: auto;
  width: 100vw;
  font-family: "Unbounded", sans-serif;
}

/* ul {
  margin: 0;
  padding-top: 2em;
  padding-bottom: 1em;
  list-style: none;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

li a {
  text-align: center;
  padding: 1em;
  text-decoration: none;
  color: var(--darkblue);
  font-size: 1rem;
}

li a:hover {
  color: var(--primary-color);
}

li a span {
  color: white;
  background: var(--primary-color);
  padding: 0.5em 1em;
  border-radius: 10px;
  margin-right: 1rem;
}

li a span:hover {
  color: #000;
  background: var(--secundary-purple-color);
  padding: 0.5em 1em;
  border-radius: 10px;
  margin-right: 1rem;
} */

/* Main */
h1 {
  width: 100vw;
  height: 100%;

  color: #000;
  font-family: "Unbounded", sans-serif;
  font-size: 2em;
  font-weight: 700;
  line-height: 53px; /* 101.361% */
  text-transform: uppercase;
}

h1.name-homepage {
  text-align: right;
  /* width: 100vw; */
  padding-top: 1em;
}

@media (min-width: 500px) {
  /* Nav */
  button.menu {
    display: none;
  }

  /* Main */
  h1 {
    font-size: 5em;
    line-height: 87px; /* 101.361% */
  }
}

@media (min-width: 900px) {
  /* Navigation */
  nav {
    width: 100vw;
    height: auto;
    width: 100vw;
    font-family: "Unbounded", sans-serif;
  }

  ul {
    margin: 0;
    padding-top: 2em;
    padding-bottom: 1em;
    list-style: none;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  li a {
    text-align: center;
    padding: 1em;
    text-decoration: none;
    color: var(--darkblue);
    font-size: 1rem;
  }

  li a:hover {
    color: var(--primary-color);
  }

  li a span {
    color: white;
    background: var(--primary-color);
    padding: 0.5em 1em;
    border-radius: 10px;
    margin-right: 1rem;
  }

  li a span:hover {
    color: #000;
    background: var(--secundary-purple-color);
    padding: 0.5em 1em;
    border-radius: 10px;
    margin-right: 1rem;
  }

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
    padding-top: 1em;
  }
}
</style>
