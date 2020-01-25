import React from 'react';

export default class AddBookmark extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            url: "",
            description: "",
            rating: 1
        };
    }

    titleChanged(title) {
        this.setState({
            title
        });
    }

    urlChanged(url) {
        this.setState({
            url
        });
    }

    descriptionChanged(description) {
        this.setState({
            description
        });
    }

    ratingChanged(rating) {
        this.setState({
            rating
        });
    }

    handleSubmit = (e) => {
        console.log(`ran handleSubmit`);
        e.preventDefault();
        const bookmark = (({title, url, description, rating}) => ({title, url, description, rating}))(this.state);
        const postUrl = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
        const options = {
            method: 'POST',
            body: JSON.stringify(bookmark),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer $2a$10$6.wiFdDtxlX4ATITf9J69uK8VbFnSt/YBHa1qtVJmvIfnHGm8RHry"
            }
        };

        fetch(postUrl, options)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Give it up, weakling. You will never do a push-up.')
                }
                return res.json();
            })
            .then(data => {
                this.setState({
                    title: '',
                    url: '',
                    description: '',
                    rating: 1
                });
                this.props.handleAdd(bookmark);
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            });
    }

    render() {
        const error = this.state.error
            ? <div className='error'>{this.state.error}</div>
            : '';

        return (
            <div className='addbookmark'>
                <h2>Add Bookmark</h2>
                {error}
                <form className='addbookmark__form' onSubmit={this.handleSubmit}>
                    <label htmlFor='title'>Title:</label>
                    <input
                        type='text'
                        name='title'
                        id='title'
                        placeholder='Title'
                        value={this.state.title}
                        onChange={e => this.titleChanged(e.target.value)}
                    />

                    <label htmlFor='url'>Url:</label>
                    <input
                        type='text'
                        name='url'
                        id='url'
                        placeholder='url'
                        value={this.state.url}
                        onChange={e => this.urlChanged(e.target.value)}
                    />

                    <label htmlFor='description'>Description:</label>
                    <textarea
                        type='text'
                        name='description'
                        id='description'
                        placeholder='Description'
                        value={this.state.description}
                        onChange={e => this.descriptionChanged(e.target.value)}
                    />

                    <label htmlFor='rating'>Rating:</label>
                    <input
                        type='number'
                        name='rating'
                        id='rating'
                        min='1'
                        max='5'
                        value={this.state.rating}
                        onChange={e => this.ratingChanged(e.target.value)}
                    />

                    <div className='addbookmark__buttons'>
                        <button onClick={e => this.props.showForm(false)}>Cancel</button>
                        <button type='submit'>Save</button>
                    </div>

                </form>
            </div>
        )
    }
}