import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const issuesState = atom({
  key: 'issuesState',
  default: new Map(),
  effects_UNSTABLE: [persistAtom],
})

export const sequenceState = atom({
  key: 'sequenceState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
})
