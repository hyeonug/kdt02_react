import { atom } from "jotai";

export const cntAtom = atom(0) ;
export const cntAtom2 = atom((get) => get(cntAtom) * 2) ;