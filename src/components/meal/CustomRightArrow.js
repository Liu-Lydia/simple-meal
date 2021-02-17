function CustomRightArrow({ onClick }) {
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
        class="fas fa-chevron-circle-right cha-rigth-icon cha-green"
      />
    </button>
  )
}
export default CustomRightArrow
