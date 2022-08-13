import type { Role } from './enums'

export interface User {
  id: string
  email: string
  firstname: string | null
  lastname: string | null
  roles: Roles
  invite_token?: string
  project_id?: string
}

export type Roles = Record<Role, boolean>