import React, { Component } from 'react'
import { View , Alert} from 'react-native'
import {Text, Container, Button, Content, Form, Input, Label, Item} from 'native-base'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : '',
            password : ''
        }
    }

login = async () => {
  // Initialize Firebase
    var config = {
     apiKey: "AIzaSyBH8Hnc4oCTN2kxKdkxUchSBS8fZAz4A2w",
     authDomain: "absensi-d9603.firebaseapp.com",
     databaseURL: "https://absensi-d9603.firebaseio.com",
     projectId: "absensi-d9603",
     storageBucket: "absensi-d9603.appspot.com",
     messagingSenderId: "986749091600"
     };
  firebase.initializeApp(config);

//snapshot itu hasil tangkapan data dari database, 
     firebase.database()
     .ref('user')
     .orderByChild('username')
     .equalTo(this.state.username)
     .on('child_added', snapshot => {
        if (this.state.password == snapshot.val().password){
            if (snapshot.val().role == 'mahasiswa'){
                this.props.navigation.navigate('HomeMhs')
            }else if (snapshot.val().role == 'dosen') {
                this.props.navigation.navigate('HomeDos')    
            }
        }
     })
    }

    render() { //render itu bagian yang menampilkan tampilan
        return (
          <Container>
              <Content>
                  <Form>
                      <Item>
                          <Label>
                              Username :
                          </Label>
                          <Input onChangeText = {(Text)=> this.setState({Username : Text})}/>
                      </Item>
    
                      <Item>
                          <Label>
                              Password :
                          </Label>
                          <Input secureTextEntry = {true} onChangeText = {(Text)=> this.setState({Password : Text})}/>
                      </Item>
                  </Form>
                  <Button onPress = {this.login}>
                      <Text>
                          Login
                      </Text>
                  </Button>
              </Content>
          </Container>
        )
      }
}

export default Login;
