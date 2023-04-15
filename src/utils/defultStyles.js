import {StyleSheet} from 'react-native';
import {colors, fontFamilies} from './constants';

const defaultStyles = StyleSheet.create({
  bodey: {
    flex: 1,
  },
  centerElements: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mv20: {
    marginVertical: 20,
  },
  menuItemBgColor: {
    backgroundColor: colors.lightYellow,
  },
});
export default defaultStyles;
