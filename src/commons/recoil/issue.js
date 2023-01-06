import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const issuesState = atom({
  key: 'issuesState',
  default: {
    items: {},
    sequence: 1,
  },
  effects_UNSTABLE: [persistAtom],
});

export default issuesState;
