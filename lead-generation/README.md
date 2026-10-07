# Punto 1 · Partire dal mercato: quiz «Che bocca hai?» e guide gratuite

Questo è il sistema per costruire la lista: chi fa il quiz lascia l'email, riceve una guida gratuita sul suo problema e viene etichettato in Omnisend in base alla sua «folla».

```
Pubblicità / social / sito
        │  (link con utm_source)
        ▼
Quiz «Che bocca hai?»  ──►  risultato + prodotto consigliato
        │
        ▼  modulo iscrizione nativo di Shopify
Cliente Shopify con etichette  ──►  sincronizzazione  ──►  Contatto Omnisend con le stesse etichette
                                                                │
                                                                ▼
                                             Email di consegna della guida per la sua folla
```

## Cosa c'è in questa cartella

| File | Cosa contiene |
|---|---|
| `quiz/quiz-che-bocca-hai.html` | Il quiz completo (7 domande, raccolta email, risultato). Un solo file da incollare in Shopify. Se lo apri nel browser funziona in anteprima, senza inviare dati. |
| `guide/pdf/` | Le 6 guide gratuite in PDF, pronte da caricare. |
| `guide/0X-*.html` + `stile.css` | I testi delle guide, modificabili. Dopo una modifica si rigenerano i PDF con `node guide/genera-pdf.js`. |
| `email-consegna-guide.md` | Le 6 email che consegnano le guide (oggetto, anteprima, testo). |

## Le folle, le etichette e le guide

| Folla | Etichetta principale | Guida gratuita | Prodotto consigliato nel risultato |
|---|---|---|---|
| Alito pesante | `folla-alito` | Alito fresco in 14 giorni | Kit Routine |
| Gengive che sanguinano | `folla-gengive` | Gengive che sanguinano: cosa significa e cosa fare | Kit Esoso |
| Cambiamenti ormonali | `folla-ormoni` | Bocca e ormoni: la guida rapida | Kit La Bocca Ormonale |
| Dieta keto | `folla-keto` | Keto senza alito da chetosi (checklist) | Kit Keto |
| Sorriso più bello | `folla-sorriso` | Il sorriso luminoso, senza sbiancanti aggressivi | Kit Giorno e Notte |
| Genitori | `folla-genitori` | 21 giorni di Missione Denti (calendario stampabile) | Libro Missione Denti |

Ogni contatto del quiz riceve anche:

- `quiz-che-bocca-hai`: indica che è arrivato dal quiz;
- `interesse-<folla>`: per gli altri problemi emersi dalle risposte (es. una donna in gravidanza con gengive che sanguinano riceve `folla-gengive` + `interesse-ormoni`);
- `fonte-<utm_source>`: da dove è arrivato (es. `fonte-meta`), se il link aveva i parametri UTM. Serve per il punto 4, «misurare tutto»;
- `newsletter`: la aggiunge Shopify da solo.

### Come funziona il punteggio

Ogni risposta dà punti a una o più folle. Vince la folla con più punti. A parità di punti vince quella scelta nella prima domanda («Cosa vorresti migliorare per prima cosa?»). Le altre folle con almeno 3 punti diventano `interesse-…`. Domande, punti e testi dei risultati si cambiano negli oggetti `QUESTIONS` e `RESULTS` dentro il file del quiz.

## Installazione: passo per passo

### 1. Caricare le guide in Shopify (10 minuti)
1. Shopify → **Contenuti → File** → carica i 6 PDF di `guide/pdf/`.
2. Copia il link di ognuno: serve nelle email.

### 2. Pubblicare il quiz (15 minuti)
1. Shopify → **Negozio online → Pagine** → crea la pagina **«Che bocca hai?»** (indirizzo consigliato: `/pages/quiz`).
2. **Personalizza tema** → apri la nuova pagina → **Aggiungi sezione → Liquid personalizzato** → incolla tutto il contenuto di `quiz/quiz-che-bocca-hai.html` → Salva.
   *Se il tema segnala che il testo è troppo lungo:* Tema → Modifica codice → Sezioni → aggiungi una nuova sezione `quiz-che-bocca-hai.liquid`, incolla il file e aggiungi in fondo `{% schema %}{"name":"Quiz Che bocca hai","presets":[{"name":"Quiz Che bocca hai"}]}{% endschema %}`. Poi aggiungi la sezione alla pagina dal tema.
3. **Fai un test vero** con una tua email: completa il quiz, poi controlla in Shopify → Clienti che il contatto abbia le etichette (es. `quiz-che-bocca-hai`, `folla-alito`). Dopo qualche minuto controlla lo stesso contatto in Omnisend → Contatti.

> Il quiz usa lo stesso modulo di iscrizione di Shopify già usato per la lista d'attesa del cerotto: lì le etichette arrivano correttamente in Omnisend (es. `lista-attesa-cerotto`, `newsletter`). Se Shopify chiede la verifica anti-spam (captcha), il quiz passa da solo all'invio classico e mostra il risultato al ritorno sulla pagina.

### 3. Omnisend: le email di consegna (30-40 minuti)
Crea **6 automazioni** (una per folla), copiando l'impostazione del flusso già attivo «Benvenuto Lista d'attesa cerotto»:

- **Attivazione:** «Iscritto al marketing» → canale Email
- **Pubblico:** etichetta uguale a `folla-alito` (poi `folla-gengive`, ecc.)
- **Attesa:** 1 minuto
- **Email:** il testo corrispondente in `email-consegna-guide.md`, con il link del PDF
- **Limite di frequenza:** una volta sola

### 4. Omnisend: evitare la doppia email di benvenuto (5 minuti) ⚠️
Il flusso **«Benvenuto»** (quello con lo sconto del 10%) oggi parte per **ogni nuova iscrizione**, tranne chi ha l'etichetta `lista-attesa-cerotto`. Senza modifiche, chi fa il quiz riceverebbe **due email insieme**: la guida e lo sconto.
→ Nel flusso «Benvenuto», nel pubblico aggiungi una seconda condizione: **etichetta diversa da `quiz-che-bocca-hai`**.
(Lo sconto si può poi proporre dentro la sequenza del quiz, dopo 2-3 email di valore.)

### 5. Portare traffico al quiz
- Link in bio Instagram/TikTok: `https://vivibiotic.it/pages/quiz?utm_source=instagram&utm_medium=bio`
- Pubblicità Meta: `?utm_source=meta&utm_medium=paid&utm_campaign=quiz-<folla>`
- Pulsante nel menu e in homepage: «Fai il quiz: che bocca hai?»
- Popup di uscita: «Prima di andare: scopri in 1 minuto cosa dice la tua bocca»

## Cose da sapere

- **Chi è già iscritto alla newsletter** e rifà il quiz riceve le nuove etichette, ma l'attivazione «Iscritto al marketing» non riparte, perché è già iscritto. Per loro conviene una campagna mensile al segmento «etichetta `folla-…` aggiunta negli ultimi 30 giorni», oppure, se Omnisend lo offre nel vostro piano, un'automazione attivata dall'aggiunta di un'etichetta.
- **Revisione dei testi:** le guide sono scritte con un linguaggio informativo e prudente (sono cosmetici: niente promesse di cura). Prima di pubblicarle falle rileggere alla Dott.ssa Cavaleri. Volendo può firmarle lei: aumenta la credibilità.
- **Firma delle email:** sono firmate «Francesca di Vivibiotic», come il flusso del cerotto. Se Francesca è la Dott.ssa Cavaleri, nell'email della folla «ormoni» trasforma il riferimento all'ebook in prima persona («ho scritto un ebook…»).
- **Tracciamento:** il quiz invia l'evento `Lead` al pixel di Meta e `generate_lead` a Google, se sono presenti sulla pagina. Così le pubblicità possono ottimizzare sui contatti raccolti.
- **Privacy:** il consenso al marketing è obbligatorio per inviare il modulo e rimanda a `/policies/privacy-policy`. Verifica che l'informativa citi l'uso dei dati del quiz per inviare consigli personalizzati.

## Prossimi passi

1. Per ogni folla, una sequenza di 4-5 email dopo la guida: storia, meccanismo del microbiota, prove e recensioni, offerta d'ingresso.
2. Misurare ogni mese, per folla: iscritti al quiz, % che compra entro 30 giorni, valore del primo ordine.
3. Testare titoli e domande del quiz (punto 4 della strategia).
