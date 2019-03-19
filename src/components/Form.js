import React, { Component } from 'react'
import {
        View,
        TextInput,
        Button
        } from 'react-native'
import uuidv1 from 'uuid'
import {addArticle} from '../actions/index'
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
      addArticle: article => dispatch(addArticle(article))
    };
  }

class ConnectedForm extends Component {
    
    constructor() {
        super();
        this.state = {
          title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ title: event });
    }
    
    handleSubmit(event) {
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({ title, id });
        this.setState({ title: "" });
    }
    

    render() {
        const {title} = this.state
        return (
        <View>
            <TextInput
                id="title"
                style={{height: 40}}
                placeholder="Type here to translate!"
                value={title}
                onChangeText={this.handleChange}
            />
            <Button onPress={this.handleSubmit}
                title="Save"
                color="#841584"
            />
        </View>
        )
  }
}


const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;

