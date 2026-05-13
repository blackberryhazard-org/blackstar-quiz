import { brainoutData } from './data/brainout';
import { caklontongData } from './data/caklontong';
import { riddleData } from './data/riddle';
import { whatanimalData } from './data/whatanimal';
import { whatchemistryData } from './data/whatchemistry';
import { whatcountryData } from './data/whatcountry';
import { whatfilmData } from './data/whatfilm';
import { whatflagData } from './data/whatflag';
import { whatfoodData } from './data/whatfood';
import { whatlyricData } from './data/whatlyric';
import { whatpictureData } from './data/whatpicture';
import { whatprofessionData } from './data/whatprofession';
import { whatwordData } from './data/whatword';
import { whoamiData } from './data/whoami';

import type {
  BrainoutQuiz,
  CakLontongQuiz,
  RiddleQuiz,
  WhatAnimalQuiz,
  WhatChemistryQuiz,
  WhatCountryQuiz,
  WhatFilmQuiz,
  WhatFlagQuiz,
  WhatFoodQuiz,
  WhatLyricQuiz,
  WhatPictureQuiz,
  WhatProfessionQuiz,
  WhatWordQuiz,
  WhoAmIQuiz,
} from './types';

export * from './types';

class QuizAPI<T> {
  private data: T[];

  constructor(data: any[]) {
    this.data = data as T[];
  }

  /**
   * Mendapatkan semua daftar kuis
   */
  public all(): T[] {
    return this.data;
  }

  /**
   * Mendapatkan satu kuis secara acak
   */
  public random(): T {
    const randomIndex = Math.floor(Math.random() * this.data.length);
    return this.data[randomIndex];
  }
}

export const brainout = new QuizAPI<BrainoutQuiz>(brainoutData);
export const caklontong = new QuizAPI<CakLontongQuiz>(caklontongData);
export const riddle = new QuizAPI<RiddleQuiz>(riddleData);
export const whatanimal = new QuizAPI<WhatAnimalQuiz>(whatanimalData);
export const whatchemistry = new QuizAPI<WhatChemistryQuiz>(whatchemistryData);
export const whatcountry = new QuizAPI<WhatCountryQuiz>(whatcountryData);
export const whatfilm = new QuizAPI<WhatFilmQuiz>(whatfilmData);
export const whatflag = new QuizAPI<WhatFlagQuiz>(whatflagData);
export const whatfood = new QuizAPI<WhatFoodQuiz>(whatfoodData);
export const whatlyric = new QuizAPI<WhatLyricQuiz>(whatlyricData);
export const whatpicture = new QuizAPI<WhatPictureQuiz>(whatpictureData);
export const whatprofession = new QuizAPI<WhatProfessionQuiz>(whatprofessionData);
export const whatword = new QuizAPI<WhatWordQuiz>(whatwordData);
export const whoami = new QuizAPI<WhoAmIQuiz>(whoamiData);
