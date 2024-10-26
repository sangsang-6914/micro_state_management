import { atom } from 'jotai';

export const firstNameAtom = atom('Woo');
export const lastNameAtom = atom('Sang hun');
export const ageAtom = atom(30);

export const personAtom = atom((get) => ({
  firstName: get(firstNameAtom),
  lastName: get(lastNameAtom),
  age: get(ageAtom),
}));

export const fullNameAtom = atom((get) => ({
  firstName: get(firstNameAtom),
  lastName: get(lastNameAtom),
}));
