import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface LoginInterface {
  email: String;
  password: String;
}

export interface CharacterInterface {
  char_id: number;
  name: string;
  birthday: string;
  occupation: Array<string>;
  img: string;
  status: string;
  appearence: [number];
  nickname: string;
  portrayed: string;
}

export interface CharacterIconInterface {
  status: string;
  icon: IconName;
  color: string;
}
