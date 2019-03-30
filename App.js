/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Form from './src/components/Form'
import List from './src/components/List'
import Posts from './src/components/Posts'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.articles}>Articles</Text>
        <Text style={styles.list}>To get started, edit App.js</Text>
        <List />
        <View>
          <Text>Add a new article</Text>
          <Form />
        </View>
        
        <View>
          <Text>Api post</Text>
          <Posts />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  articles: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  list: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
