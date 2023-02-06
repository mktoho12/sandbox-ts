import { greetee } from './core'

// 個人のお客様
interface PersonalUser {
  familyName: string
  givenName: string
}

export const person = greetee<PersonalUser>(
  ({ familyName, givenName }) => `${familyName} ${givenName}さん、こんにちは！`
)
