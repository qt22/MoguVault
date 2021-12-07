import Vue from 'vue';
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { required, email, min, max, regex } from 'vee-validate/dist/rules';

// Register rules
extend('required', required);
extend('email', email);
extend('min', min);
extend('max', max);
extend('regex', regex);

// extend('postCode', {
//   message: 'Enter a valid Canadian postal code',
//   validate: (value) => {
//     return /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(
//       value
//     ); //Test the regex. Test function returns a true or false value.
//   }
// });

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);