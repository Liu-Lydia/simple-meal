function CustomLeftArrow({ onClick }) {
  function handleClick() {
    // do whatever you want on the right button click
    console.log('Right button clicked, go to next slide')
    // ... and don't forget to call onClick to slide
    onClick()
  }

  return (
    <button>
      <i
        onClick={handleClick}
        aria-label="Go to next slide"
        class="fas fa-chevron-circle-left cha-left-icon cha-green"
      />
    </button>
  )
}
export default CustomLeftArrow
