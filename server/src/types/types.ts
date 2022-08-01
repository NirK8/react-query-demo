export enum DocumentStatus {
  ACTIVE = 0,
  INACTIVE,
}

export type User = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  status: DocumentStatus;
};
