alert('should work')

// Source: https://getbutterfly.com/how-to-open-only-one-details-summary-element-at-a-time/
if (document.querySelector('details')) {
  // Fetch all the details elements
  const details = document.querySelectorAll('details')

  // Add onclick listeners
  details.forEach((targetDetail) => {
    targetDetail.addEventListener('click', () => {
      // Close all details that are not targetDetail
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute('open')
        }
      })
    })
  })
}
