import React from 'react'
import { useParams } from 'react-router';

const ContentDetails = () => {
    // console.log(useParams());
    const {slug} = useParams()
    console.log(slug);
  return (
    <div>ContentDetails</div>
  )
}

export default ContentDetails