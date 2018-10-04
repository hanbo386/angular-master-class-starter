export const htmlElementDisabledMatcher: jest.ExpectExtendMap = {
  toBeDisabled: (element: HTMLElement) => {
    const getSelectorName = () => {
      if ((element as HTMLInputElement).name) {
        return (element as HTMLInputElement).name;
      }

      if (element.className && element.className.length > 0) {
        return element.className;
      }
    };

    const isDisabled = () => {
      const nativeDisabled = element.getAttribute('disabled') !== null;

      const matDisabledAttr = element.getAttribute('aria-disabled');
      const matDisabled =
        matDisabledAttr !== null && matDisabledAttr === 'true';

      return nativeDisabled || matDisabled;
    };

    return {
      pass: isDisabled(),
      message: () => `Expected [${getSelectorName()}] to be disabled`
    };
  }
};
