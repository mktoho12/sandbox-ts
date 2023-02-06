import { greetee } from './core'

// 法人のお客様
interface CorporateUser {
  name: string
}

export const corporate = greetee<CorporateUser>(
  ({ name }) => `${name}さん、こんにちは！`
)
