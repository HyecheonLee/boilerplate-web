export interface ActionProps {
  type: string,
  user: UserState,
}

export interface UserState {
  id: number,
  username: string,
  name: string | null,
  email: string | null,
  profile: string | null,
  roles: string[],
  photo: string | null,
}