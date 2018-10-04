/**
 * An input with matInput and ReactiveForms support on it are not able to be 'disabled' directly,
 * so its sometimes useful to use 'readonly' instead.
 */
export const htmlElementReadonlyMatcher: jest.ExpectExtendMap = {
  toBeReadonly: (element: HTMLElement) => {
    const getSelectorName = () => {
      if ((element as HTMLInputElement).name) {
        return (element as HTMLInputElement).name;
      }

      if (element.className && element.className.length > 0) {
        return element.className;
      }
    };

    const isReadonly = () => {
      return element.getAttribute('readonly') !== null;
    };

    return {
      pass: isReadonly(),
      message: () => `Expected [${getSelectorName()}] to be readonly`
    };
  }
};
