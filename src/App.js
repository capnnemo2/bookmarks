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

  componentDidMount() {
    const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
    const options = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer $2a$10$6.wiFdDtxlX4ATITf9J69uK8VbFnSt/YBHa1qtVJmvIfnHGm8RHry",
        "Content-type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('You are not a Jedi, stop trying to use the force.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookmarks: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
        
        
        
      
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

