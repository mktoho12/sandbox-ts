import { greetee } from './core'

// 空島のお客様
export const skypiea = greetee<{ name: string }>(
  ({ name }) => `空島の${name}様、へそ！`
)
