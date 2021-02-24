import React, { useState } from 'react'
import ImageUploader from 'react-images-upload'

const Test = (props) => {
  const [pictures, setPictures] = useState([])

  const onDrop = (picture) => {
    setPictures([...pictures, picture])
  }
  return (
    <ImageUploader
      withIcon={false}
      onChange={props.onDrop}
      singleImage={true}
      withPreview={true}
      imgExtension={['.jpg', '.gif', '.png', '.gif', 'jpeg']}
      maxFileSize={5242880}
    />
  )
}

export default Test
