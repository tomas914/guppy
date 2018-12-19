// @flow
import { getBorderColor } from './TextInput';
import type { Props } from './TextInput';

import { COLORS } from '../../constants';

describe('TextInput', () => {
  describe('getBorderColor', () => {
    let props: Props = {
      isFocused: null,
      hasError: null,
      children: null,
    };

    it('returns correct color when nothing is selected', () => {
      const actualOutput = getBorderColor(props);

      expect(actualOutput).toEqual(COLORS.gray[700]);
    });

    it('returns correct color when focused', () => {
      props.isFocused = true;
      props.hasError = false;
      props.children = null;

      const actualOutput = getBorderColor(props);

      expect(actualOutput).toEqual(COLORS.purple[700]);
    });

    it('returns correct color when has error focused', () => {
      props.isFocused = true;
      props.hasError = true;
      props.children = null;

      const actualOutput = getBorderColor(props);

      expect(actualOutput).toEqual(COLORS.pink[500]);
    });

    it('returns correct color when has error not in focus', () => {
      props.isFocused = false;
      props.hasError = true;
      props.children = null;

      const actualOutput = getBorderColor(props);

      expect(actualOutput).toEqual(COLORS.pink[500]);
    });
  });
});
