import React from 'react'
import { withRouter } from 'react-router-dom'

class CartModeControl extends React.Component {
  componentDidMount(prevProps) {
    // console.log(this.props.location, prevProps.location)
    // console.log(this.props.location)
    // if (prevProps.location.pathname === '/surprisekitchen') {
    //   this.props.setCartMode('ReserveKitchen')
    // }
  }

  componentDidUpdate(prevProps) {
    // setTimeout(() => {
    //   console.log(this.props.location, prevProps.location)
    // }, 5000)
  }

  render() {
    return this.props.children
  }
}

export default withRouter(CartModeControl)
