import React from 'react';
import BookmarksList from '../BookmarksList/BookmarksList';
import Fab from '../Fab/Fab';

export default class BookmarkApp extends React.Component {
    render() {
        return(
            <div className='bookmarkApp'>
                <h2>Bookmarks</h2>
                <BookmarksList bookmarks={this.props.bookmarks} />
                <Fab />
            </div>
        )
    }
}