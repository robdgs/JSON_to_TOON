# JSON to TOON Converter

Un'applicazione web moderna per convertire dati JSON in formato TOON, con un'interfaccia stile terminale vintage.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8?style=flat-square&logo=tailwind-css)

## 📋 Descrizione

JSON to TOON Converter è un'applicazione web sviluppata con Next.js che permette di convertire facilmente file JSON in formato TOON. L'interfaccia è progettata con uno stile brutalist/terminale vintage che combina estetica retro e funzionalità moderna.

### Caratteristiche Principali

- ✨ **Interfaccia Terminale**: Design brutalist con bordi quadrati, ombre solide e font monospace
- 🎨 **Palette Light**: Background beige chiaro con contrasti netti in nero
- ⚡ **Conversione in Tempo Reale**: Validazione JSON e conversione istantanea
- 🔍 **Gestione Errori**: Messaggi di errore chiari e dettagliati per JSON non validi
- 📱 **Responsive Design**: Ottimizzato per desktop e dispositivi mobili
- 🎯 **TypeScript**: Tipizzazione statica per maggiore affidabilità del codice

## 🚀 Getting Started

### Prerequisiti

- Node.js 18.x o superiore
- npm, yarn, pnpm o bun

### Installazione

1. Clona il repository:

```bash
git clone https://github.com/robdgs/JSON-_to_TOON.git
cd json_to_toon
```

2. Installa le dipendenze:

```bash
npm install
# oppure
yarn install
# oppure
pnpm install
```

3. Avvia il server di sviluppo:

```bash
npm run dev
# oppure
yarn dev
# oppure
pnpm dev
```

4. Apri [http://localhost:3000](http://localhost:3000) nel browser

## 🎯 Come Usare

1. **Inserisci il JSON**: Scrivi o incolla il tuo JSON valido nel campo `INPUT.json` sulla sinistra
2. **Converti**: Clicca sul pulsante `[ CONVERT ]`
3. **Visualizza**: Il risultato in formato TOON apparirà nel campo `OUTPUT.toon` sulla destra

### Esempio

**Input JSON:**

```json
{
  "name": "Mario Rossi",
  "age": 30,
  "skills": ["JavaScript", "TypeScript", "React"]
}
```

**Output TOON:**

```
name: Mario Rossi
age: 30
skills: JavaScript
TypeScript
React
```

## 🛠️ Tecnologie Utilizzate

- **[Next.js 16.1.6](https://nextjs.org/)** - Framework React per applicazioni web
- **[React 19](https://react.dev/)** - Libreria UI
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipizzato di JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[ESLint](https://eslint.org/)** - Linter per JavaScript/TypeScript

## 📁 Struttura del Progetto

```
json_to_toon/
├── app/
│   ├── page.tsx          # Pagina principale con logica di conversione
│   ├── layout.tsx        # Layout root dell'applicazione
│   ├── globals.css       # Stili globali e Tailwind
│   └── favicon.ico       # Favicon
├── public/               # Asset statici
├── .next/               # Build output (generato)
├── node_modules/        # Dipendenze (generato)
├── package.json         # Configurazione npm e dipendenze
├── tsconfig.json        # Configurazione TypeScript
├── tailwind.config.ts   # Configurazione Tailwind CSS
├── next.config.ts       # Configurazione Next.js
└── README.md           # Questo file
```

## 🎨 Personalizzazione

### Modificare la Logica di Conversione

La funzione di conversione si trova in `app/page.tsx`. Per personalizzare il formato TOON:

```typescript
const convertJsonToToon = (json: any): string => {
  // Implementa qui la tua logica personalizzata
  // ...
};
```

### Modificare lo Stile

Gli stili sono gestiti tramite Tailwind CSS. Per modificare i colori o l'aspetto:

1. Modifica le classi Tailwind direttamente in `app/page.tsx`
2. Personalizza la configurazione in `tailwind.config.ts`
3. Aggiungi stili custom in `app/globals.css`

## 🧪 Build e Deploy

### Build di Produzione

```bash
npm run build
npm run start
```

### Deploy su Vercel

Il modo più semplice per deployare l'app è utilizzare [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/robdgs/JSON-_to_TOON)

Oppure tramite CLI:

```bash
npm install -g vercel
vercel
```

### Deploy Manuale

L'applicazione può essere deployata su qualsiasi piattaforma che supporta Node.js:

- **Netlify**: Configura il build command come `npm run build`
- **Railway**: Connetti il repository e deploy automatico
- **AWS/Google Cloud/Azure**: Usa container Docker o servizi serverless

## 📝 Script Disponibili

- `npm run dev` - Avvia il server di sviluppo con hot reload
- `npm run build` - Crea la build di produzione ottimizzata
- `npm run start` - Avvia il server di produzione
- `npm run lint` - Esegue ESLint per controllare il codice

## 🐛 Troubleshooting

### Errore: "JSON non valido"

Assicurati che il JSON inserito sia formattato correttamente. Usa strumenti come [JSONLint](https://jsonlint.com/) per validarlo.

### Problemi di Build

Se riscontri errori durante il build:

```bash
rm -rf .next node_modules
npm install
npm run build
```

## 🤝 Contribuire

I contributi sono benvenuti! Per contribuire:

1. Fai un fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Committa le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Pusha sul branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.

## 👤 Autore

**robdgs**

- GitHub: [@robdgs](https://github.com/robdgs)
- Repository: [JSON-\_to_TOON](https://github.com/robdgs/JSON-_to_TOON)

## 🙏 Ringraziamenti

- Design ispirato all'estetica brutalist e ai terminali vintage
- Costruito con [Next.js](https://nextjs.org/)
- Powered by [Vercel](https://vercel.com/)

---

⭐ Se questo progetto ti è stato utile, considera di mettere una stella su GitHub!
