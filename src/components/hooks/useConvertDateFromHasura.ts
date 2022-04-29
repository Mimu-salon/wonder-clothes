import { useMemo } from 'react';

// hasura上に保存されている日時を整形して返す
export const useConvertDateFromHasura = (date: string): string => {
  return useMemo(() => {
    const yearN = Number(date.substring(0, 4));
    const monthN = Number(date.substring(5, 7));
    const dayN = Number(date.substring(8, 10));
    const hourN = Number(date.substring(11, 13));
    const minuteN = Number(date.substring(14, 16));

    const createdAt = new Date(yearN, monthN, dayN, hourN, minuteN);
    createdAt.setHours(createdAt.getHours() + 9);
    const [year, month, day, hour, minute] = [
      createdAt.getFullYear(),
      createdAt.getMonth(),
      createdAt.getDate(),
      createdAt.getHours(),
      createdAt.getMinutes(),
    ];
    // 一桁の場合は0を表示する
    const [zeroPaddingMonth, zeroPaddingDay, zeroPaddingHour, zeroPaddingMinute] = [
      ('0' + month).slice(-2),
      ('0' + day).slice(-2),
      ('0' + hour).slice(-2),
      ('0' + minute).slice(-2),
    ];

    return `${year}/${zeroPaddingMonth}/${zeroPaddingDay} ${zeroPaddingHour}:${zeroPaddingMinute}`;
  }, [date]);
};
