import React, { Component } from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'

const mapStateToProps = state =>{
    return {articles:state.topic}
}

const ConnectedList = ({articles}) => (
    <View style={{
        flexDirection:'column'
    }}>
        {articles.map(el => (
            <Text key={el.id}>
                {el.title}
            </Text>

        ))}
    </View>
);


const List = connect(mapStateToProps)(ConnectedList);

export default List;


