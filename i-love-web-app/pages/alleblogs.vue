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

  <!-- <div class="card-1">Ischa Gast</div> -->
  <h1>Alle blogs</h1>
  <!-- <div class="projects">
      <button class="blog-button">Ischa Gast</button>
      <button class="project-button">Eleventy project</button>
      <button class="blog-button">Tim Borst</button>
      <button class="project-button">Random Studio project</button>
    </div> -->
  <main>
    <article>
      <h2>Ischa gast</h2>
      <p>
        Ischa, werkzaam bij Schiphol, is actief bezig met het bevorderen van
        toegankelijkheid op het web. Hij deelde met ons dat de gemiddelde
        website meer dan 50 toegankelijkheidsfouten heeft op de startpagina. Dit
        is problematisch, gezien het feit dat 100% van de mensen op enig moment
        in hun leven met beperkingen te maken krijgt. Verschillende soorten
        beperkingen zijn onder andere motorische, auditieve, visuele,
        cognitieve, vermoeidheids- en ouderdomsbeperkingen. Om de
        toegankelijkheid van een webpagina te verbeteren, is het raadzaam
        rekening te houden met de volgende aspecten: HTML-structuur Kopstructuur
        Focus-stijlen Kleurcontrast Het kan soms handig zijn om 'hiddentext' aan
        links toe te voegen. Om de toegankelijkheid op jouw website te
        verbeteren, kunnen de volgende tools van pas komen: WebDev Toolbar
        PageSpeed Insights Color Contrast Analyzer
      </p>
    </article>

    <article>
      <h2>Eleventy project</h2>
      <p></p>
    </article>

    <article>
      <h2>Tim borst</h2>
      <p>
        Tim Borst vertelde recentelijk over zijn loopbaan als front-end
        ontwikkelaar en ontwerper. Na zijn studie CMD besloot hij met twee
        anderen een bedrijf in front-end ontwikkeling te starten. Het bedrijf
        groeide tot 15 medewerkers. Gedurende deze periode deed hij waardevolle
        ervaring op, zoals het inzicht dat het soms nodig is om strenger te
        zijn, bijvoorbeeld bij het nemen van moeilijke beslissingen zoals
        ontslagen.

        <br />
        Tim benadrukte het belang van positieve mond-tot-mondreclame, aangezien
        dit altijd zijn belangrijkste bron van opdrachten is geweest. Hij
        accepteerde bijna elke opdracht, maar achteraf gezien realiseerde hij
        zich dat hij liever als front-end ontwikkelaar was gebleven, omdat hij
        dat werk erg leuk vond.

        <br />
        Tegenwoordig vervult Tim de rol van ontwerper en streeft hij ernaar
        zoveel mogelijk van het leven te genieten.
      </p>
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
  border: 2px solid;
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
