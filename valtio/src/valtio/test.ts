import { proxy, snapshot } from 'valtio';

// state, snap1은 다른 참조를 가진다
// snap1은 readonly (불변)
export const state = proxy({ count: 0 });
const snap1 = snapshot(state);

++state.count;
const snap2 = snapshot(state);
