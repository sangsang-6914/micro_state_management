import { atom } from 'jotai';

export const countAtom = atom(0);
export const count1Atom = atom(0);
export const count2Atom = atom(0);

export const totalAtom = atom((get) => get(count1Atom) + get(count2Atom));
