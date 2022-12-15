export interface SessionProps {
  token: string
}

export class Session {
  private token: string

  constructor(props: SessionProps) {
    this.token = props.token
  }

  public getToken(): string {
    return this.token
  }
}
