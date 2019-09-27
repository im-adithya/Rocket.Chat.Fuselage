import { theme } from '../helpers';
import colors from '../tokens/colors';


export default {
  default: theme('text-colors-default', colors.dark800),
  info: theme('text-colors-info', colors.dark700),
  hint: theme('text-colors-hint', colors.dark600),
  disabled: theme('text-colors-disabled', colors.dark400),
  alternative: theme('text-colors-alternative', colors.white),
  primary: theme('text-colors-primary', colors.blue500),
  success: theme('text-colors-success', colors.green500),
  danger: theme('text-colors-danger', colors.red500),
  warning: theme('text-colors-warning', colors.yellow700),
};