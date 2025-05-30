const { createApp } = Vue;

createApp({
  data() {
    return {
      siteData: {
        name: "Sonnenhof",
        meta: {
          email: "info@sonnenhof.it",
          phone: "+39 0123 456789",
          address: "Via delle Alpi 1, Trentino-Alto Adige",
          description: "Il maso Sonnenhof offre ospitalità in un appartamento immerso nella natura, tra le montagne dell'Alto Adige."
        },
        menu: [
          { label: "Home", href: "#heroCarousel" },
          { label: "Chi siamo", href: "#about" },
          { label: "Servizi", href: "#services" },
          { label: "Galleria", href: "#gallery" },
          { label: "Contatti", href: "#contact" }
        ],
        hero: {
          title: "Benvenuti al Sonnenhof",
          subtitle: "Relax e natura nel cuore delle montagne",
          slides: [
            { img: "img/jumbo1.jpg" },
            { img: "img/jumbo2.jpg" },
            { img: "img/jumbo3.jpg" },
            { img: "img/jumbo4.jpg" },
          ]
        },
        about: "Sonnenhof è una fattoria tradizionale dell'Alto Adige che offre ospitalità in un ambiente autentico, accogliente e immerso nella natura.",
        services: [
          {
            title: "Appartamento arredato",
            description: "Un alloggio spazioso, in stile alpino, dotato di ogni comfort.",
            icon: "fa-solid fa-house"
          },
          {
            title: "Esperienze rurali",
            description: "Attività con gli animali, raccolta prodotti, vita in fattoria.",
            icon: "fa-solid fa-leaf"
          },
          {
            title: "Panorami mozzafiato",
            description: "Passeggiate tra i sentieri, viste spettacolari tutto l'anno.",
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
