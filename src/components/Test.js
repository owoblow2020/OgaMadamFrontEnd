import React, { Component } from 'react';

class Test extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentWillMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res =>res.json())
        .then(json => this.setState({data:json}));
    }
    render() {
        const postData = this.state.data.map(post=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));

        return (
            <div>
                <h3>Post</h3>
                {postData}
            </div>
            
        );
    }
}

export default Test;