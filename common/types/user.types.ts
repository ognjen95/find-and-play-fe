export interface IUser {
  id: string;

  firstName: string;

  lastName: string;

  email: string;

  image: string;

  description: string;

  sports: string[];

  createdAt?: Date;

  reliability?: number;

  stamina?: number;

  location: {
    lng: number;
    lat: number;
    city: string;
    state: string;
  };
}
