import { isNil } from 'lodash-es';
import { DateTime } from 'luxon';

const formatDate = (
  date: string | null,
  format = 'dd/MM/yyyy'
): string | null => {
  if (isNil(date)) {
    return null;
  }

  return DateTime.fromISO(date).toFormat(format);
};

export default formatDate;