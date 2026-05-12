export interface BaseQuiz {
  pertanyaan?: string;
  soal?: string;
  jawaban: string;
}

export interface BrainoutQuiz extends BaseQuiz {
  pertanyaan: string;
}

export interface CakLontongQuiz extends BaseQuiz {
  index: number;
  pertanyaan: string;
  deskripsi: string;
}

export interface RiddleQuiz extends BaseQuiz {
  pertanyaan: string;
}

export interface WhatAnimalQuiz extends BaseQuiz {
  soal: string;
}

export interface WhatChemistryQuiz {
  unsur: string;
  lambang: string;
}

export interface WhatCountryQuiz extends BaseQuiz {
  soal: string;
}

export interface WhatFilmQuiz extends BaseQuiz {
  soal: string;
}

export interface WhatFlagQuiz {
  img: string;
  name: string;
}

export interface WhatFoodQuiz {
  img: string;
  jawaban: string;
  deskripsi: string;
}

export interface WhatLyricQuiz extends BaseQuiz {
  soal: string;
}

export interface WhatPictureQuiz {
  index: number;
  img: string;
  jawaban: string;
  deskripsi: string;
}

export interface WhatProfessionQuiz extends BaseQuiz {
  soal: string;
}

export interface WhatWordQuiz {
  tipe: string;
  acak: string;
  jawaban: string;
}

export interface WhoAmIQuiz extends BaseQuiz {
  pertanyaan: string;
}

export type QuizDataMap = {
  brainout: BrainoutQuiz;
  caklontong: CakLontongQuiz;
  riddle: RiddleQuiz;
  whatanimal: WhatAnimalQuiz;
  whatchemistry: WhatChemistryQuiz;
  whatcountry: WhatCountryQuiz;
  whatfilm: WhatFilmQuiz;
  whatflag: WhatFlagQuiz;
  whatfood: WhatFoodQuiz;
  whatlyric: WhatLyricQuiz;
  whatpicture: WhatPictureQuiz;
  whatprofession: WhatProfessionQuiz;
  whatword: WhatWordQuiz;
  whoami: WhoAmIQuiz;
};
