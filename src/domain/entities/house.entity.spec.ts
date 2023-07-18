import { Test, TestingModule } from '@nestjs/testing';

import { House } from './house.entity';

describe('house entity', () => {
  let house: House;

  it('should be create module', async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [House],
    }).compile();
    house = module.get<House>(House);
    expect(house).toBeInstanceOf(House);
  });
});
