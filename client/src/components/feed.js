import { h } from 'preact';

const Feed = ({ feeds }) => {
	const feedsUi = feeds?.map(feed => <li>{feed}</li>)

	return (
		<ul>
            {feedsUi}
        </ul>
	)
}

export default Feed;
