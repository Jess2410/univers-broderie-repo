import React from 'react'

function BlockFooter({title, contentList}) {


  return (

    // map contentList to create a list of links
    <div className='block-footer'>
        
        <h2 className='block-footer-title'>{title}</h2>
        <ul className='block-footer-list'>
           {contentList.map((item, index) => (<li className='block-footer-item' key={index}>{item}</li>))}
        </ul>
        
    </div>
  )
}

export default BlockFooter