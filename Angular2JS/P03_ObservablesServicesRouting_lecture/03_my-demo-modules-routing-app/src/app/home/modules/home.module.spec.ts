import { HomeModule } from './home.module';

describe('HomeModuleModule', () => {
  let homeModuleModule: HomeModule;

  beforeEach(() => {
    homeModuleModule = new HomeModule();
  });

  it('should create an instance', () => {
    expect(homeModuleModule).toBeTruthy();
  });
});
