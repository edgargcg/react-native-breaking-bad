import { colors } from '../themes/BaseTheme';
import { CharacterIconInterface } from '../interfaces/Interfaces';

export const CharacterIcons: Array<CharacterIconInterface> = [
  {
    status: 'Deceased',
    icon: 'skull-crossbones',
    color: colors.purple,
  },
  {
    status: 'Alive',
    icon: 'heart',
    color: colors.red,
  },
  {
    status: 'Unknown',
    icon: 'question',
    color: colors.white,
  },
  {
    status: 'Presumed dead',
    icon: 'snowman',
    color: colors.white,
  },
];
