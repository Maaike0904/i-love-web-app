<script setup>
// import { useNextApp } from "nuxt/app";
// const { $client } = useNuxtApp();
// const data = await $client.getEntries();
// console.log(data);
</script>

<template>
  <h1>Alle blogs</h1>
  <main>
    <article>
      <h2>Ischa Gast</h2>
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
      <h2>Fenna de Wilde</h2>
      <p>
        Fenna is een getalenteerde frontend developer die bekend staat om haar
        creatieve bijdragen aan diverse websites, waaronder de betoverende
        "moooi" website met scroll-animaties. Ze deelt haar passie voor het
        verbeteren van webtoegankelijkheid, benadrukkend dat dit vaak over het
        hoofd wordt gezien. Haar presentatie belicht verschillende aspecten,
        zoals focusstaat, ARIA-attributen, toegankelijke carrousels, en aandacht
        voor kleurcontrasten en lettergroottes. Fenna's inzet voor
        toegankelijkheid gaat verder dan een trend; het is een cruciaal element
        in haar ontwerpfilosofie, waarmee ze bruggen slaat tussen technologie en
        gebruikers.
      </p>
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
  border-radius: 20px;
  background-color: var(--secundary-purple-color);
}
h1 {
  padding-bottom: 1em;
}

h2 {
  padding-bottom: 0.5em;
}
</style>
