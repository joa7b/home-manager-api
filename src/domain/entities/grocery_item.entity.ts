import { Entity } from '../../core/Entity';

export class Grocery_item extends Entity {
  product_name: string;
  description: string;
  bought: boolean;
  purchased_id: string;
  purchased_at: Date;
}
