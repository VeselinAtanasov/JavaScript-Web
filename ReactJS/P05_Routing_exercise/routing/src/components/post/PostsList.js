import React, {Component} from 'react';
import requester from '../../infrastructure/requester';
import Post from './Post';
import '../../styles/post.css';

export default class PostsList extends Component{
    constructor(props){
        super(props);
        this.state={
            posts : []
        };
        this.getPosts = this.getPosts.bind(this);
    }

    getPosts(){
        requester.get('appdata','posts','kinvey')
            .then(data => {
            //This is one way to update the STATE:
                // this.setState({
                //     posts : data
                // });

            //THERE IS ANOTHER WAT TO UPDATE THE STATE:
                this.setState(prevState=>{
                    //This is very convenient in case we want to push something in the existing array
                    let newState = { posts: data};
                    return newState;
                });
            });
    }

    componentDidMount(){
        this.getPosts();
    }

    render(){
        return (
            <section id="viewCatalog">
                {this.state.posts.map((p,i) => <Post key ={p._id} rank={i} {...p} /> )}
            </section>
           
        );
    }
}