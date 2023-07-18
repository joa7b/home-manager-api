import { Test, TestingModule } from '@nestjs/testing';

import { PublicModule } from './public.module';

describe('Public module', () => {
  let publicModule: PublicModule;

  it('should be create module', async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicModule],
    }).compile();
    publicModule = module.get<PublicModule>(PublicModule);
    expect(publicModule).toBeInstanceOf(PublicModule);
  });
});