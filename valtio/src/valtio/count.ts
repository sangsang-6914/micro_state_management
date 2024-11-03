import { proxy } from 'valtio';

export const state = proxy({
  count1: 0,
  count2: 0,
});
