/* eslint-disable @typescript-eslint/no-inferrable-types */

import { KeyValue } from "@angular/common";
import { Post } from "src/app/interfaces/post";

export const CURRENT_YEAR = 2021;

export const groupBy = <TItem>(xs: TItem[], key: string): {[key: string]: TItem[]} => {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

export const reToSlash: RegExp = /_/gi;
export const reToDashSep: RegExp = /\+/gi;
export const reToSpace: RegExp = /-/gi;

// Order by descending property key
export const keyDescOrder = (a: KeyValue<string,Post[]>, b: KeyValue<string,Post[]>): number => {
  return +a.key > +b.key ? -1 : (+b.key > +a.key ? 1 : 0);
}
