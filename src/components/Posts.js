import React, { Component } from "react";
import {View,Text} from 'react-native';
import { connect } from "react-redux";
import { getData } from "../actions/index";
export class Post extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // calling the new action creator
    this.props.getData();
  }
  render() {
    return (
        <View>
            {
                this.props.articles.map(el => (
                    <Text key={el.id}>
                        {el.title}
                    </Text>
            ))}
        </View>
    );
  }
}

function mapStateToProps(state) {
    return {
      articles: state.remoteArticles.slice(0, 10)
    };
  }


export default connect(
  mapStateToProps,
  { getData }
)(Post);