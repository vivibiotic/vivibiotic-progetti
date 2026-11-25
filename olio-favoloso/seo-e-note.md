# Olio Favoloso: pacchetto SEO/GEO/AEO e note di pubblicazione

## Metadati articolo

- **Titolo H1:** Olio Favoloso: la guida completa. Cos'è, come si usa e perché ti cambia la serata
- **Meta title (≤60):** Olio Favoloso: guida completa a usi, dosi e avvertenze
- **Meta description (≤155):** 96 ingredienti vegetali, poche gocce, mille usi: bagno, pediluvio, massaggi, suffumigi e casa. Come usare l'Olio Favoloso bene e in sicurezza.
- **Slug consigliato:** `/blogs/blog/olio-favoloso-guida-completa` (oppure aggiornare l'articolo esistente `i-mille-usi-dell-olio-favoloso` e mantenerne l'URL, che è già collegato dalla scheda prodotto nel metafield `custom.modi_d_uso`)
- **Keyword principale:** olio favoloso
- **Keyword secondarie:** olio balsamico multiuso, olio balsamico alle erbe, miscela di oli essenziali, oli essenziali per pediluvio, suffumigi oli essenziali, olio per massaggio defaticante, quante gocce di olio essenziale nel bagno
- **Alt text immagini:** "Flacone di Olio Favoloso Vivibiotic 100 ml", "Gocce di Olio Favoloso in un pediluvio con sale grosso", "Suffumigi con Olio Favoloso"

## Come è costruito il testo

| Leva | Dove si trova |
|---|---|
| **SEO** | Keyword in H1, primo paragrafo, H2; H2/H3 a domanda; link interno alla scheda prodotto; sezione "Perché proprio l'Olio Favoloso" |
| **GEO** (citabilità da ChatGPT, Perplexity, AI Overviews) | Box "In breve" iniziale autosufficiente; numeri precisi e verificabili (96 ingredienti, ~2.000 gocce, 12 mesi PAO, 4,69/5 su 16 recensioni); definizioni in una frase; data di aggiornamento |
| **AEO** (risposte dirette) | FAQ con risposte di 1-3 frasi che iniziano con la risposta; schema FAQPage JSON-LD sotto |
| **Neuroscienze** | Via olfattiva diretta verso amigdala/ippocampo; recettori TRPM8 (mentolo ed eucaliptolo come "fresco percepito"); condizionamento olfattivo ("àncora") |
| **Neuromarketing** | Apertura sensoriale ed embodied; effetto pratfall (recensione negativa citata apertamente); riprova sociale con numeri; ancoraggio di prezzo per goccia (2 centesimi); frammentazione per momenti della giornata; contrasto "5 prodotti vs 1 flacone"; P.S. finale |
| **Tono Lutzu** | Frasi brevi, "tu", concretezza, zero aggettivi vuoti, onestà come leva di vendita, chiusura con alternativa e CTA, P.S. |

## Cose cambiate rispetto all'articolo originale (importante)

L'articolo "I mille usi dell'olio favoloso" contiene indicazioni che ho tolto o riscritto, perché per un **cosmetico** sono rischiose (Reg. UE 1223/2009 e 655/2013 sui claim) o pericolose per chi le legge:

- **Claim terapeutici tolti:** "effetto anestetizzante", "antidolorifico", "previene la caduta dei capelli", "trattamento dell'acne", "micosi delle unghie", "anticellulite", "anti-rughe", "slogature", "ematomi", "contro zanzare e cimici" (quest'ultimo lo farebbe rientrare tra i biocidi).
- **Uso puro sulla pelle:** l'articolo lo consiglia in più punti, mentre la scheda prodotto dice "meglio diluiti". Ora è tutto diluito.
- **Goccia sulla lampadina:** rischio incendio, tolto.
- **20 gocce sul piatto doccia:** rischio scivolamento, spostato su un panno appeso.
- **Pittura antimuffa "disinfettante":** claim biocida, tolto.
- **Avvertenze aggiunte:** fotosensibilità (bergamotto), allergie (arachidi, mandorle, noce, già nella scheda), gatti, asma ed epilessia, infiammabilità.

## ⚠️ Da correggere subito sulla scheda prodotto

Il **meta title e la meta description SEO della scheda prodotto** parlano di **oil pulling** ("Oil Pulling Naturale", "purifica la bocca, riduce i batteri nocivi e supporta il microbiota orale").

L'INCI contiene canfora, trementina, tuia, ruta, assenzio, issopo e olio di arachidi: **non deve andare in bocca**. Quella descrizione è pericolosa e contraddice "uso esterno, non ingerire". Proposta di sostituzione:

- **Meta title:** Olio Favoloso 100 ml | Olio balsamico multiuso | Vivibiotic
- **Meta description:** 96 ingredienti vegetali tra oli essenziali e oli vegetali. Per bagno, pediluvio, massaggi e ambiente. Balsamico, non unge. Solo uso esterno.

## Schema JSON-LD (da incollare nell'articolo)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Olio Favoloso: la guida completa. Cos'è, come si usa e perché ti cambia la serata",
      "datePublished": "2026-11-25",
      "dateModified": "2026-11-25",
      "author": {"@type": "Person", "name": "Maria Francesca Cavaleri"},
      "publisher": {"@type": "Organization", "name": "Vivibiotic", "url": "https://vivibiotic.it"},
      "about": {"@type": "Product", "name": "Olio Favoloso 100ml", "url": "https://vivibiotic.it/products/olio-favoloso-100ml"}
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Cos'è l'Olio Favoloso Vivibiotic?", "acceptedAnswer": {"@type": "Answer", "text": "È un olio balsamico multiuso da 100 ml, formulato con 96 ingredienti vegetali tra oli essenziali, oli vegetali ed estratti. Si usa sulla pelle, diluito, e per profumare l'ambiente."}},
        {"@type": "Question", "name": "A cosa serve l'Olio Favoloso?", "acceptedAnswer": {"@type": "Answer", "text": "Per bagni e pediluvi rilassanti, massaggi defaticanti, suffumigi balsamici, cura di pelle e capelli (sempre diluito) e per profumare casa, bucato, armadi e scarpe."}},
        {"@type": "Question", "name": "Cosa rende diverso l'Olio Favoloso dagli altri oli balsamici?", "acceptedAnswer": {"@type": "Answer", "text": "La formula: 96 ingredienti vegetali che bilanciano note balsamiche e note morbide con oli vegetali nutrienti. Intenso ma non aggressivo e, diluito, non unge."}},
        {"@type": "Question", "name": "Si può usare l'Olio Favoloso per l'oil pulling?", "acceptedAnswer": {"@type": "Answer", "text": "No. È solo per uso esterno: non va ingerito né usato in bocca."}},
        {"@type": "Question", "name": "Si può applicare puro sulla pelle?", "acceptedAnswer": {"@type": "Answer", "text": "Meglio di no. Va diluito in crema, olio vegetale o acqua: per esempio 3-5 gocce in un cucchiaio di olio vegetale."}},
        {"@type": "Question", "name": "Quante gocce usare per il bagno?", "acceptedAnswer": {"@type": "Answer", "text": "Da 15 a 20 gocce, sciolte prima in un cucchiaio di sale grosso o di bagnoschiuma."}},
        {"@type": "Question", "name": "Si può usare in gravidanza o sui bambini?", "acceptedAnswer": {"@type": "Answer", "text": "No. Non va usato in gravidanza, in allattamento e sotto i 12 anni."}},
        {"@type": "Question", "name": "Chi è allergico alla frutta a guscio può usarlo?", "acceptedAnswer": {"@type": "Answer", "text": "No. Contiene olio di arachidi, olio di mandorle dolci ed estratto di noce."}},
        {"@type": "Question", "name": "Quanto dura un flacone?", "acceptedAnswer": {"@type": "Answer", "text": "Un flacone da 100 ml contiene circa 2.000 gocce e dura mesi. Una volta aperto, va usato entro 12 mesi."}},
        {"@type": "Question", "name": "L'Olio Favoloso unge?", "acceptedAnswer": {"@type": "Answer", "text": "No, se diluito in crema o olio vegetale come indicato."}}
      ]
    }
  ]
}
</script>
```

## Da verificare prima di pubblicare

- **Numero ingredienti:** 96 è il conto delle voci "Oil"/"Extract" nell'INCI caricato su Shopify (le restanti 12 voci sono componenti come limonene, mentolo, linalolo). Se in comunicazione preferite "quasi 100", basta sostituire.
- **Gocce per flacone:** ~2.000 è una stima standard (20 gocce/ml); dipende dal contagocce.
- **Nomi nelle recensioni:** ho abbreviato i cognomi.
