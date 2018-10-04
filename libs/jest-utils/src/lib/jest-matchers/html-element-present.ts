import { DebugElement } from '@angular/core';

export const htmlElementPresentMatcher: jest.ExpectExtendMap = {
  toBePresent: (element: DebugElement | null) => {
    const getSelectorName = () => {
      if (element === null) {
        // TODO(jpr): come up with method to provide a name
        return 'no name';
      }

      const nativeElement = element.nativeElement as HTMLElement;

      if ((nativeElement as HTMLInputElement).name) {
        return (nativeElement as HTMLInputElement).name;
      }

      if (nativeElement.className && nativeElement.className.length > 0) {
        return nativeElement.className;
      }
    };

    return {
      pass: element !== null,
      message: () => `Expected [${getSelectorName()}] to be present in the DOM`
    };
  }
};
