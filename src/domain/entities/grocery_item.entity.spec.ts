import { Test, TestingModule } from '@nestjs/testing';

import { Grocery_item } from './grocery_item.entity';

describe('house entity', () => {
  let grocery_item: Grocery_item;

  it('should be create module', async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Grocery_item],
    }).compile();
    grocery_item = module.get<Grocery_item>(Grocery_item);
    expect(grocery_item).toBeInstanceOf(Grocery_item);
  });
});
