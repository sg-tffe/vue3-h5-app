export interface PureObject {
  [key: string]: any
}

export interface Result {
  code: number | string
  data: Record<string, unknown>
  msg?: string
}

export interface State {
  list: PureObject | Record<string, unknown>
}

export type ResultCallback = (res: Result) => void
