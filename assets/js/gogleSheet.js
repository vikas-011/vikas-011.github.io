const scriptURL = 'https://script.google.com/macros/s/AKfycbzu4dL9itH1aX-M_sxyrDQ7qGIcS0Sx1h40FAk858zVTZFnI_NllgyVuT0292c6Ko95/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
