import { Test, TestingModule } from '@nestjs/testing';

import { Resident } from './resident.entity';

describe('resident entity', () => {
  let resident: Resident;

  it('should be create module', async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Resident],
    }).compile();
    resident = module.get<Resident>(Resident);
    expect(resident).toBeInstanceOf(Resident);
  });
});
