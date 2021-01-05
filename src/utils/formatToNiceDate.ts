import format from 'date-fns/format';
import { nl } from 'date-fns/locale';

const formatMap = {
    numeric: 'yyyy-MM-dd',
    nice: 'EEEE d MMMM, yyyy',
} as const;

const formatToNiceDate = (date: Date, variant: keyof typeof formatMap) =>
    format(date, formatMap[variant], { locale: nl });

export default formatToNiceDate;
