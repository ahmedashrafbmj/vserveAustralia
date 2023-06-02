module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'], // Adjust the paths based on your project structure
  css: ['./styles/index.scss'], // Adjust the path to your SCSS file
  output: './optimized.css', // Specify the output file for the optimized CSS
  rejected: true, // Log removed selectors and unused keyframes
  m:true
};
