import React from 'react';
import BookmarkApp from './components/BookmarkApp/BookmarkApp';
import AddBookmark from './components/AddBookmark/AddBookmark';

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
  render() {
    return (
      <div className='App'>
        <AddBookmark />
        <BookmarkApp bookmarks ={bookmarks} />
      </div>
    )
  }
}

