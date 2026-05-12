# blackstar-quiz

Kumpulan API Kuis berbahasa Indonesia dalam bentuk module TypeScript/JavaScript yang dapat digunakan dimana saja tanpa bergantung pada filesystem (baik itu Node.js, Deno, Bun, maupun langsung di Browser).

Modul ini adalah bundler-free dan telah dikompilasi ke format ESM & CJS, sehingga siap digunakan dengan `import` atau `require`.

## Instalasi

### Menggunakan NPM / Yarn / PNPM

```bash
npm install blackstar-quiz
# atau
yarn add blackstar-quiz
# atau
pnpm add blackstar-quiz
```

### Menggunakan JSR (Deno / Bun / Node)

```bash
npx jsr add @blackberryhazard-org/blackstar-quiz
# atau di Deno
deno add @blackberryhazard-org/blackstar-quiz
```

## Penggunaan

Anda dapat mengimpor kuis yang diinginkan secara individual. Ada 14 jenis kuis yang tersedia:
`brainout`, `caklontong`, `riddle`, `whatanimal`, `whatchemistry`, `whatcountry`, `whatfilm`, `whatflag`, `whatfood`, `whatlyric`, `whatpicture`, `whatprofession`, `whatword`, `whoami`.

Setiap kuis menyediakan method `.all()` untuk mengambil semua soal dan `.random()` untuk mengambil satu soal secara acak.

### Contoh (ES Modules)

```ts
import { brainout, caklontong } from 'blackstar-quiz';

// Mengambil satu kuis acak
const randomBrainout = brainout.random();
console.log(randomBrainout.pertanyaan);
console.log(randomBrainout.jawaban);

// Mengambil semua data kuis Cak Lontong
const allCaklontong = caklontong.all();
console.log(`Terdapat ${allCaklontong.length} soal Cak Lontong.`);
```

### Contoh (CommonJS)

```javascript
const { whatpicture, whoami } = require('blackstar-quiz');

const randomImageQuiz = whatpicture.random();
console.log(randomImageQuiz.img);
console.log(randomImageQuiz.jawaban);

const randomWhoAmI = whoami.random();
console.log(randomWhoAmI.pertanyaan);
console.log(randomWhoAmI.jawaban);
```

## Types (TypeScript)

Modul ini menyediakan tipe TypeScript secara langsung.
```ts
import type { CakLontongQuiz, BrainoutQuiz } from 'blackstar-quiz';
```

## Lisensi
ISC
