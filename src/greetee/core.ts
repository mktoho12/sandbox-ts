type Greetee<User> = User & {
  greetingMessage: () => string
}

type CreateGreetee<User> = (props: User) => Greetee<User>

export const greetee =
  <User>(greetingMessage: (props: User) => string): CreateGreetee<User> =>
  (props: User): Greetee<User> => ({
    ...props,
    greetingMessage: () => greetingMessage(props),
  })
