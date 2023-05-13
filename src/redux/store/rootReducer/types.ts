export interface Keys {
  [key: string]: string;
}

export interface ActionTypes {
  type: string;
  payload: Keys | undefined;
}