import { atom } from 'recoil';

export const loadingModalVisibleState = atom({
  key: 'loadingModalVisibleState',
  default: false,
});

export const grabIssueState = atom({
  key: 'grabIssueState',
  default: undefined,
});
