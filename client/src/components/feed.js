import { h } from 'preact'

const Feed = ({ feeds }) => {
  const feedsUi = feeds?.map((feed) => <li key={feed}>{feed}</li>)

  return <ul>{feedsUi}</ul>
}

export default Feed
