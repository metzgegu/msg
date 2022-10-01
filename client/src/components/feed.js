import { h } from 'preact'

const Feed = ({ feeds }) => {
  const feedsUi = feeds?.map((feed, i) => <li key={i}>{feed}</li>)

  return <ul>{feedsUi}</ul>
}

export default Feed
