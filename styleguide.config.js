const path = require('path');

module.exports = {
  components: 'src/components/ui/**/*.js',
  styleguideComponents: {
    Wrapper: path.join(__dirname, './src/styleguide/Wrapper'),
  },
};
