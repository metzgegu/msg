import { h } from 'preact'
import('../style/feed.css')

const Feed = ({ feeds }) => {
  const feedsUi = feeds?.map((feed, i) => (
    <li class="item" key={i}>
      {feed}
    </li>
  ))

  return <ul class="list">{feedsUi}</ul>
}

export default Feed
