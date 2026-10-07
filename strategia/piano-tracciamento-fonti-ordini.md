# Piano: sapere da dove arrivano gli ordini

Analisi del perché la maggior parte degli ordini Vivibiotic non ha una fonte, e piano concreto per sistemarlo (UTM, pixel, attribuzione).
Collegato al punto 4 «Misurare tutto» di `strategia/business-direct-response-vivibiotic.md`.

*Dati: Shopify Analytics (ultimi 365 giorni al 7 ottobre 2026, 5.608 ordini), campione di 99 ordini recenti (#7532–#7631, 25 settembre – 7 ottobre 2026) letti uno per uno, report Omnisend gennaio–ottobre 2026.*

---

## 1. In breve

1. **Il buco è più piccolo di quanto sembrava, ma resta grande.** L'85% veniva da un solo campo di Shopify (il sito di provenienza). Unendo anche i link tracciati (UTM), gli ordini **senza fonte utile sono il 62%** (3.483 su 5.608), non l'85%.
2. **L'email non porta 6 ordini, ne porta almeno 1.082 (19%, circa € 69.700).** Le email di Omnisend, Klaviyo e Judge.me hanno già i link tracciati, ma il report «per sito di provenienza» non li conta. Omnisend, con il suo metodo, se ne attribuisce ancora di più (2.236 ordini da gennaio).
3. **La causa principale è il consenso ai cookie.** Nel 44% degli ordini recenti Shopify non ha registrato nemmeno una visita: il cliente ha comprato, ma la sua navigazione non è stata salvata. Succede tipicamente quando il cliente non accetta i cookie di analisi. Nessun UTM e nessun pixel può recuperare questi ordini.
4. **Metà di questi ordini "invisibili" ha però un codice sconto** (Tropez20, manu10, laverita10, livebetter15, cnm10…). I codici sono già oggi la fonte più affidabile che abbiamo, ma nessuno li collega al canale.
5. **La soluzione quindi non è solo tecnica.** Servono tre cose che non dipendono dai cookie: la domanda «Come ci hai conosciuto?» dopo l'acquisto, un registro dei codici sconto, e una regola unica per decidere a chi va il merito di un ordine. UTM e pixel completano il quadro.

---

## 2. Da dove arrivano davvero gli ordini oggi

Ultimi 365 giorni, ultimo clic secondo Shopify, unendo sito di provenienza e UTM:

| Fonte | Ordini | % | Vendite |
|---|---:|---:|---:|
| **Email** (Omnisend, Klaviyo, Judge.me, carrello abbandonato) | 1.082 | 19,3% | € 69.667 |
| **Ricerca** (Google 597, Bing, Yahoo, Ecosia, altri) | 626 | 11,2% | € 42.865 |
| **Social** (Instagram 326, Linktree 62, Facebook, TikTok) | 406 | 7,2% | € 23.482 |
| Partner e siti esterni (chiararegolini.it, ilariabertini, Judge.me…) | 11 | 0,2% | € 556 |
| **Fonte sbagliata**: il sito stesso (519), Shopify/Shop Pay (238), app Android senza UTM (37) | 794 | 14,2% | € 54.463 |
| **Nessun dato** | 2.689 | 47,9% | € 172.248 |
| **Totale** | **5.608** | | **€ 363.281** |

Ordini con una fonte utile: **2.125 (38%)**. Ordini senza: **3.483 (62%)**.

### Cosa si vede negli ordini uno per uno (99 ordini recenti)

| Situazione | Ordini | Cosa significa |
|---|---:|---|
| Nessuna visita registrata | 44 | Shopify non ha salvato la navigazione (consenso cookie rifiutato o non dato, oppure ordine dall'app Shop) |
| …di cui con un codice sconto | 23 | La fonte si può ricostruire dal codice |
| Visita «diretta» che arriva da vivibiotic.it stesso | 11 | La sessione si è spezzata a metà (pagina di ringraziamento, pagamento con Shop Pay, portale abbonamenti) e la fonte vera si è persa |
| Email con UTM Omnisend o Judge.me | 5 | Tracciate bene |
| Google | ~20 | Tracciate bene |
| Linktree / Instagram senza UTM | ~6 | Si sa che è Instagram, ma non quale post, storia o persona |
| Ordini con un codice sconto (totale) | 48 | Quasi un ordine su due usa un codice |

Codici visti nel campione: **Tropez20** (9 ordini), **manu10** (6), **livebetter15** (5), **laverita10** (4), **cnm10** (2), e poi banchi10, ale10, Omnia10, koel10, dentisani10, laltramedicina10, Friends20, welcome10, più i codici unici generati da Omnisend e Judge.me (es. `GRAZIE10-…`, `XXXX-XXXX-XXXX`).

### Pubblicità a pagamento

Nell'ultimo anno ci sono solo 33 visite con UTM di pubblicità a pagamento (`ig/paid`, `fb/paid`, `facebook/paid`) e **nessun ordine**. O oggi non c'è pubblicità attiva, o le inserzioni non hanno UTM. **Da chiarire.**

### Email: due numeri molto diversi

| Fonte del dato | Ordini da email, gen–ott 2026 |
|---|---:|
| Shopify (clic sul link con UTM, ultimo clic, solo visitatori che hanno accettato i cookie) | 610 |
| Omnisend (campagne 1.885 + automazioni 351, con la sua finestra di attribuzione che conta anche le aperture) | 2.236 (≈ € 150.100) |

La verità sta in mezzo. Shopify sottostima (perde chi rifiuta i cookie), Omnisend sovrastima (si prende il merito di chi ha solo aperto l'email e poi è arrivato da Google). Serve una regola unica (vedi §4.5).

Da notare: le campagne di settembre hanno inviato 25.794 email con 46 ordini attribuiti da Omnisend, contro 133 di agosto e 423 di maggio. Il calo è reale e non dipende dal tracciamento.

---

## 3. Perché gli ordini non hanno fonte: le 5 cause

| # | Causa | Peso stimato | Si risolve con |
|---|---|---|---|
| 1 | **Consenso ai cookie non dato**: Shopify non salva la visita | ~45% degli ordini | Domanda post-acquisto, codici sconto, server-side dei pixel *con* consenso |
| 2 | **Sessione spezzata** (ritorno su vivibiotic.it, Shop Pay, portale abbonamenti) | ~14% | Verifica del percorso di checkout, esclusioni dei referral |
| 3 | **Link senza UTM** (Linktree, bio e storie Instagram, partner, QR) | ~7% + parte degli ordini senza dati | Convenzione UTM obbligatoria |
| 4 | **Codici sconto non collegati a un canale** | ~23% degli ordini, metà del buco | Registro codici → partner → canale |
| 5 | **Due sistemi che si contraddicono** (Shopify vs Omnisend) | — | Regola unica di attribuzione |

⚠️ Non ho potuto leggere la configurazione dei pixel (Meta, Google) né quella del banner cookie: il collegamento a Shopify non ha questo permesso. Le cause 1 e 2 vanno confermate guardando le impostazioni (passo 1 del piano).

---

## 4. Il piano

Ordine pensato per avere risultati subito con ciò che non dipende dai cookie, e poi sistemare la parte tecnica.

### 4.1 Domanda «Come ci hai conosciuto?» dopo l'acquisto (settimana 1)

È la misura più importante, perché funziona anche per chi rifiuta i cookie.

- **Dove**: pagina di ringraziamento (e, in alternativa, nell'email di conferma ordine).
- **Strumento**: un'app di sondaggio post-acquisto per Shopify (es. Fairing, KnoCommerce, Zigpoll). Salva la risposta sull'ordine, così si può incrociare con prodotti, valore e riacquisti.
- **Domanda e risposte** (massimo 8, in ordine casuale, con «Altro» libero):
  1. Instagram
  2. Ricerca su Google
  3. Me l'ha consigliato un amico o un familiare
  4. Dentista o igienista
  5. Farmacia
  6. Un influencer o professionista che seguo → *domanda di approfondimento: chi?*
  7. Email o newsletter Vivibiotic
  8. Altro (scrivi)
- **Solo ai nuovi clienti** la domanda completa; ai clienti che tornano una domanda diversa («Cosa ti ha fatto riordinare?»: promemoria email, prodotto finito, offerta, altro).

### 4.2 Registro dei codici sconto (settimana 1)

Metà degli ordini "invisibili" ha già un codice: basta collegarlo a una fonte.

1. Esportare tutti i codici usati nell'ultimo anno con il numero di ordini.
2. Compilare un foglio con una riga per codice:

| Codice | Chi | Canale | Tipo | Dal | Note |
|---|---|---|---|---|---|
| Tropez20 | *(da compilare)* | Instagram | influencer | | |
| manu10 | | | | | |
| laverita10 | | | | | |
| livebetter15 | | | | | |
| cnm10 | Chiara Regolini? *(visto un ordine arrivato da chiararegolini.it)* | sito | partner | | |
| welcome10 | Popup iscrizione | sito | lista | | |
| GRAZIE10-… / GRAZIE15-… | Judge.me (coupon dopo la recensione) | email | fedeltà | | |
| XXXX-XXXX-XXXX | Omnisend (codici unici delle automazioni) | email | | | |

3. **Regola da ora in poi**: nessun codice nuovo senza riga nel registro. Un codice per persona o partner, mai riusato per due canali.
4. I codici esistenti **non vanno cambiati**: sono già stampati, condivisi o salvati dai clienti.

### 4.3 Convenzione UTM (settimana 1-2)

Ogni link che porta a vivibiotic.it da fuori deve avere gli UTM, scritti sempre in minuscolo e senza spazi.

| Dove sta il link | utm_source | utm_medium | utm_campaign | utm_content |
|---|---|---|---|---|
| Linktree / bio Instagram | `instagram` | `bio` | `linktree` | nome del pulsante, es. `collutorio` |
| Storia Instagram | `instagram` | `storia` | `aaaa-mm-tema`, es. `2026-10-alito` | `storia-1` |
| Post / reel con link | `instagram` | `social` | `aaaa-mm-tema` | `reel-...` |
| Inserzione Meta | `meta` | `paid` | nome campagna | nome inserzione (si può usare `{{ad.name}}`) |
| Google Ads | `google` | `cpc` | *(automatico con il tag automatico di Google Ads)* | |
| Influencer / partner | `nome-partner` (es. `manu`) | `influencer` o `partner` | `aaaa-mm-tema` | formato |
| QR code su confezione, volantino, studio dentistico | `confezione` / `volantino` / `dentista-nome` | `qr` | `aaaa-mm-tema` | |
| WhatsApp / SMS | `whatsapp` / `sms` | `messaggio` | `aaaa-mm-tema` | |
| Email Omnisend | `omnisend` *(già attivo, lasciare così)* | `email` | *(automatico)* | |
| Judge.me | `judgeme` *(già attivo)* | `email` | *(automatico)* | |

Strumenti:
- un **generatore UTM condiviso** (un foglio con le colonne qui sopra che compone il link) e un elenco dei link già usati;
- i link per partner e influencer si possono abbinare al codice: `vivibiotic.it/discount/MANU10?utm_source=manu&utm_medium=influencer` applica lo sconto e porta gli UTM nello stesso clic.

### 4.4 Pixel, consenso e sessioni spezzate (settimane 2-3, da approvare prima di toccare nulla)

1. **Banner cookie**: verificare in *Impostazioni → Privacy dei clienti* che il banner sia quello di Shopify (o un'app compatibile con la Customer Privacy API), attivo per l'Italia, con «Accetta» e «Rifiuta» ugualmente visibili come richiede il GDPR. Misurare la percentuale di consenso. Obiettivo: un banner chiaro e corretto, non spingere il cliente ad accettare.
2. **Meta**: app «Facebook & Instagram» di Shopify con condivisione dati al livello **Massimo** (pixel + API di conversione lato server). Verificare in Gestione eventi che l'evento Purchase arrivi una sola volta per ordine (deduplicazione) e con un buon punteggio di qualità.
3. **Google**: app «Google & YouTube» con Consent Mode v2 attivo e conversioni avanzate; GA4 collegato. In GA4 escludere come referral `shop.app`, `shopify.com`, `checkout.shopify.com`, `paypal.com` e i domini di pagamento, così il ritorno dal pagamento non cancella la fonte.
4. **Sessioni spezzate**: aprire alcuni ordini con fonte «vivibiotic» e «shopify» e capire il percorso (pagina di ringraziamento, Shop Pay su shop.app, portale abbonamenti `/apps/subscriptions`). Controllare che nessun link interno punti a `vivibiotic.myshopify.com` invece che a `vivibiotic.it`.
5. **Pixel personalizzati vecchi**: eliminare script duplicati nel tema o in *Impostazioni → Eventi dei clienti* (doppio pixel = acquisti contati due volte).

### 4.5 Una regola unica: a chi va il merito di un ordine (settimana 3)

Per ogni ordine si usa la **prima informazione disponibile** in quest'ordine:

1. **Risposta del cliente** alla domanda post-acquisto (nuovi clienti);
2. **Codice sconto** presente nel registro;
3. **UTM** dell'ultimo clic (Shopify);
4. **Sito di provenienza** (Google, Instagram…);
5. altrimenti «sconosciuto».

Per l'email si guardano due numeri, sempre affiancati: il minimo (ordini con clic su UTM in Shopify) e il massimo (attribuiti da Omnisend). Per decidere il budget si usa il minimo.

### 4.6 Il numero da guardare ogni settimana (dalla settimana 4)

Un unico report settimanale con:

| Fonte (regola 4.5) | Ordini nuovi clienti | Ordini clienti che tornano | Vendite |
|---|---|---|---|

e una riga in cima: **% di ordini con fonte nota**.

| | Oggi | Fra 30 giorni | Fra 90 giorni |
|---|---:|---:|---:|
| Ordini con fonte nota | 38% | 60% | **≥ 85%** |
| Ordini «sconosciuto» | 62% | 40% | ≤ 15% |

---

## 5. Calendario

| Settimana | Cosa | Serve modificare configurazioni? |
|---|---|---|
| 1 | Registro dei codici sconto | No |
| 1 | Convenzione UTM + aggiornare Linktree e bio Instagram | Sì (link) |
| 1 | Installare la domanda post-acquisto | Sì (app) |
| 2 | Verifica banner cookie, pixel Meta e Google | Solo lettura, poi eventuali correzioni |
| 2-3 | Correzioni a pixel, Consent Mode, esclusioni referral | Sì |
| 3 | Indagine sulle sessioni spezzate | No |
| 3 | Regola unica di attribuzione | No |
| 4 | Primo report settimanale | No |

---

## 6. Da chiarire con Vivibiotic

1. Oggi è attiva pubblicità a pagamento su Meta o Google? Se sì, con quali link?
2. Chi sono i titolari dei codici Tropez20, manu10, laverita10, livebetter15, cnm10, koel10, dentisani10, laltramedicina10, banchi10, ale10, Omnia10?
3. Quale banner cookie è installato e quale app gestisce i pixel?
4. Il calo degli ordini da email da settembre è voluto (meno invii) o va indagato?

---

## 7. Correzione ai numeri della strategia

Nel documento di strategia vanno aggiornati due numeri della tabella iniziale:

| Metrica | Prima | Corretto |
|---|---|---|
| Ordini senza fonte tracciata | 4.750 su 5.607 (85%) | **3.483 su 5.608 (62%)** |
| Ordini attribuiti all'email | 6 | **almeno 1.082 (19%)** secondo Shopify; 2.236 da gennaio secondo Omnisend |

La conclusione «l'email quasi non risulta tra le fonti» va rivista: l'email è già il primo canale tracciato.
