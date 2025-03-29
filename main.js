document.addEventListener('DOMContentLoaded', () => {
  const bundleOptions = document.querySelectorAll('.bundle-option');
  
  selectOption(bundleOptions[0]);

  bundleOptions.forEach(option => {
    option.addEventListener('click', () => {
      bundleOptions.forEach(opt => {
        opt.classList.remove('active');
        opt.querySelector('.radio-button').classList.remove('selected');
        opt.querySelector('.bundle-details').classList.remove('visible');
      });

      selectOption(option);
    });
  });
});

function selectOption(option) {
  option.classList.add('active');
  option.querySelector('.radio-button').classList.add('selected');
  option.querySelector('.bundle-details').classList.add('visible');
}