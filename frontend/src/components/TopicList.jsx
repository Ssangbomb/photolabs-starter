import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = (props) => {
  const mappedTopics = props.topics.map((topic) => {
    return <TopicListItem key={topic.id} openitem={props.openitem} id={topic.id} slug={topic.slug} title={topic.title}/>
  })
  return (
  <div className="top-nav-bar--topic-list">
    { mappedTopics }
  </div>
  )
}
export default TopicList