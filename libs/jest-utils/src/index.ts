export * from './lib/jest-utils.module';

export { configureTestSuite } from './lib/test-hack';
export * from './lib/test-mocks';

export {
  htmlElementDisabledMatcher
} from './lib/jest-matchers/html-element-disabled';
export {
  htmlElementPresentMatcher
} from './lib/jest-matchers/html-element-present';
export {
  htmlElementReadonlyMatcher
} from './lib/jest-matchers/html-element-readonly';
