import React from 'react';
import BookmarkApp from './components/BookmarkApp/BookmarkApp';
import AddBookmark from './components/AddBookmark/AddBookmark';
import Bookmark from './components/Bookmark/Bookmark';

const bookmarks = [
  {
    title: 'Google',
    url: 'http://www.google.com',
    rating: '3',
    description: 'no evil'
  },
  {
    title: 'Google',
    url: 'http://www.google.com',
    rating: '3',
    description: 'no evil'
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  }
  render() {
    const page = this.state.showAddForm
      ? <AddBookmark />
      : <BookmarkApp bookmarks={this.state.bookmarks} />
    return (
      <div className='App'>
        {page}
      </div>
    )
  }
}

