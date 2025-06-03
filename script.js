const { createApp } = Vue;

createApp({
  data() {
    return {
      siteData: {
        name: "Sonnenhof",
        meta: {
          email: "infosonnenhof@gmail.com",
          phone: "+39 338 192 56 16",
          address: "St. Josefstraße 144, Lagundo - BO",
          description: "Der Sonnenhof bietet Gastfreundschaft in einer Ferienwohnung inmitten der Natur, umgeben von den Bergen Südtirols.",
        },
        menu: [
          { label: "Startseite", href: "#heroCarousel" },
          { label: "Über uns", href: "#about" },
          { label: "Mieten", href: "#rent" },
          { label: "Leistungen", href: "#services" },
          { label: "Galerie", href: "#gallery" },
          { label: "Kontakt", href: "#contact" }
        ],
        hero: {
          title: "Willkommen am Sonnenhof",
          subtitle: "Entspannung und Natur im Herzen der Berge",

          slides: [
            { img: "img/jumbo1.jpg" },
            { img: "img/jumbo2.jpg" },
            { img: "img/jumbo3.jpg" },
            { img: "img/jumbo4.jpg" },
          ]
        },
        about: "Der Sonnenhof ist ein traditioneller Bauernhof in Südtirol, der Gastfreundschaft in einer authentischen, gemütlichen und naturnahen Umgebung bietet.",
        services: [
          {
            title: "Möblierte Wohnung",
            description: "Eine geräumige Unterkunft im alpinen Stil mit allem Komfort.",
            icon: "fa-solid fa-house"
          },
          {
            title: "Ländliche Erlebnisse",
            description: "Aktivitäten mit Tieren, Ernte von Produkten, Leben auf dem Bauernhof.",
            icon: "fa-solid fa-leaf"
          },
          {
            title: "Atemberaubende Ausblicke",
            description: "Wanderungen auf Pfaden, spektakuläre Aussichten das ganze Jahr über.",
            icon: "fa-solid fa-mountain"
          }
        ],
        gallery: [
          "img/deco1.jpg",
          "img/deco2.jpg",
          "img/deco3.jpg",
          "img/deco4.jpg",
          "img/orto1.jpg",
          "img/orto2.jpg",
          "img/orto3.jpg",
          "img/orto4.jpg",
          "img/orto5.jpg",
        ],
        imganimals: [
        "img/animali1.jpg",
        "img/animali2.jpg",
        "img/animali3.jpg",
        "img/animali4.jpg",
        "img/animali5.jpg",
        "img/animali6.jpg"
        ],
        roomphotos:[
            "img/stanza1.jpg",
            "img/stanza2.jpg",
            "img/stanza3.jpg",
            "img/stanza4.jpg",
            "img/stanza5.jpg",
            "img/stanza6.jpg",
            "img/stanza7.jpg",
            "img/stanza8.jpg",
            "img/stanza9.jpg",
            "img/stanza10.jpg",
            "img/stanza11.jpg",
            "img/stanza12.jpg",
        ]
      }
    };
  },
}).mount("#app");
