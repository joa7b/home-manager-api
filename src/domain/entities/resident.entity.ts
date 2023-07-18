import { Entity } from '../../core/Entity';

export class Resident extends Entity {
  name: string;
  email: string;
  phone: number[];
  password: string;
}
