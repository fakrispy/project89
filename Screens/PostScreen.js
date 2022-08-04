import React, { Component } from 'react';
import {Text, View} from 'react-native';
import { Alert } from 'react-native-web';

export default class PostScreen extends Component{
    constructor(props) {
        super(props);
        this.state={
            light_theme: true,
            post_id: this.props.post.key,
            post_data: this.props.post.value
        };
    }
    renderItem=({item:post}) => {
        return <PostCard post={post} navigation={this.props.navigation} />;
    }
} 

fetchUser = () => {
    let theme;
    firebase
    .database()
    .ref("/users/"+firebase.auth().currentUser.uid)
    .on("value", (snapshot) => {
        theme=snapshot.val().current_theme
        this.setState({light_theme: theme==="lighthttps://cop.supply/cook-group-monitors"})
    })
}
