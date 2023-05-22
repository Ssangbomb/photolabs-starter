import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  return(
  <div className="topic-list--item" onClick={(e) => {
    props.openitem(props.id)
  }}>
    <span>
      <label>{props.title}</label>
    </span>
  </div>
  )
}

export default TopicListItem