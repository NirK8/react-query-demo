export enum DocumentStatus {
  ACTIVE = 0,
  INACTIVE,
}

export type User = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  age: number;
  address: string;
  status: DocumentStatus;
};
