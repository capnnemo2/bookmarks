import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

export default class BookmarksList extends React.Component {
    render() {
        const bookmarks = this
            .props
            .bookmarks
            .map((bookmark, i) => <Bookmark {...bookmark} key={i} />);

        return (
            <div className='bookmarksList'>
                {bookmarks}
            </div>
        )
    }
}

BookmarksList.defaultProps = {
    bookmarks: []
};