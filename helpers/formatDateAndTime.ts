import { enGB } from 'date-fns/locale';
import { format } from 'date-fns';

export const formatDateAndTime = (date: Date) =>
  format(new Date(date), 'dd.MM.yyyy  HH:mm ', {
    locale: enGB,
  });
