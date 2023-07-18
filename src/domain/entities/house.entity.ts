import { Entity } from '../../core/Entity';

import { Resident } from './resident.entity';

export class House extends Entity {
  name: string;
  address: string;
  residents: Resident[];
  grocery_purchases: string[];
  household_bills: string[];
}
