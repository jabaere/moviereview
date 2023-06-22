import { atom } from "jotai";

const currentPagePopularAtom = atom(1);
const currentPageUpcomingAtom = atom(1);
const currentPageTopAtom = atom(1);
const updateUi = atom(Math.floor(Math.random() * Date.now()));
export {
  currentPagePopularAtom,
  currentPageUpcomingAtom,
  currentPageTopAtom,
  updateUi,
};
