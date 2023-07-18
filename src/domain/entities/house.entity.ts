import { Entity } from '../../core/Entity';

export class House extends Entity {
  name: string;
  address: string;
  residents: string[];
  grocery_purchases: string[];
  household_bills: string[];
}
