import React from "react";
import BookmarkApp from "./components/BookmarkApp/BookmarkApp";
import AddBookmark from "./components/AddBookmark/AddBookmark";
import config from "./config";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  }

  setShowAddForm(show) {
    this.setState({
      showAddForm: show
    });
  }

  addBookmark(bookmark) {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark],
      showAddForm: false
    });
  }

  componentDidMount() {
    const url = config.API_ENDPOINT;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.API_KEY}`,
        "Content-type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("You are not a Jedi, stop trying to use the force.");
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
    const page = this.state.showAddForm ? (
      <AddBookmark
        showForm={show => this.setShowAddForm(show)}
        handleAdd={bookmark => this.addBookmark(bookmark)}
      />
    ) : (
      <BookmarkApp
        bookmarks={this.state.bookmarks}
        showForm={show => this.setShowAddForm(show)}
      />
    );
    return <div className="App">{page}</div>;
  }
}
