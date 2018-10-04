import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';

// HACK(jpr): This is a workaround for angular testbed re-compiling everything
// on every single test rather than reusing the compiler artifacts. Using this
// reduces our test runs by > 80%. See these links for more info/background:
// https://github.com/angular/angular/issues/12409#issuecomment-314814671
/* tslint:disable-next-line:max-line-length */
// https://github.com/kedar9444/unit-test-performance/blob/ecd6872e00409c91c0e2007164032f9286920c2e/src/configure-test-suit/configure-test-suit.ts

export const configureTestSuite = () => {
  const testBedApi: any = getTestBed(); // tslint:disable-line:no-any
  const swizzledReset = TestBed.resetTestingModule;

  beforeAll(() => {
    TestBed.resetTestingModule();
    TestBed.resetTestingModule = () => TestBed;
  });

  afterEach(() => {
    testBedApi._activeFixtures.forEach((fixture: ComponentFixture<any>) =>
      fixture.destroy()
    ); // tslint:disable-line:no-any
    testBedApi._instantiated = false;
  });

  afterAll(() => {
    TestBed.resetTestingModule = swizzledReset;
    TestBed.resetTestingModule();
  });
};
