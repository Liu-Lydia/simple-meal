import React from 'react'
import { Collapse } from 'react-collapse'

class DropdownItem extends React.Component {
  state = {
    isDropdownOpen: false,
  }

  onOpenClick = (props) => {
    props.setState({ isDropdownOpen: !this.state.isDropdownOpen })
  }

  render() {
    const { isDropdownOpen } = this.state
    return (
      <>
        <Collapse isOpened={isDropdownOpen}>
          <div>{this.props.children}</div>
        </Collapse>
      </>
    )
  }
}

export default DropdownItem
