export type Indexer = (len: number, idx: number) => number

export const indexerL2R: Indexer = (len, idx) => {
  return idx
}

export const indexerR2L: Indexer = (len, idx) => {
  return len - idx - 1
}
