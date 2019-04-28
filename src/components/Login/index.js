import React, { Component } from "react";
import { View, Alert } from "react-native";
import {
  Text,
  Container,
  Button,
  Content,
  Form,
  Input,
  Label,
  Item
} from "native-base";

import firebase from "@firebase/app";
import "firebase/auth";
import "firebase/database";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  login = async () => {
    console.log("login pressed");

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBH8Hnc4oCTN2kxKdkxUchSBS8fZAz4A2w",
      authDomain: "absensi-d9603.firebaseapp.com",
      databaseURL: "https://absensi-d9603.firebaseio.com",
      projectId: "absensi-d9603",
      storageBucket: "absensi-d9603.appspot.com",
      messagingSenderId: "986749091600"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    //snapshot itu hasil tangkapan data dari database,
    firebase
      .database()
      .ref("user")
      .orderByChild("username")
      .equalTo(parseInt(this.state.username))
      .on("child_added", snapshot => {
        console.log(snapshot.val());
        if (this.state.password.toString() == snapshot.val().password) {
          this.props.navigation.navigate("Home");
        }
      });
  };

  render() {
    //render itu bagian yang menampilkan tampilan
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Label>Username :</Label>
              <Input
                onChangeText={Text =>
                  this.setState({ username: Text }, () =>
                    console.log(this.state.username)
                  )
                }
              />
            </Item>

            <Item>
              <Label>Password :</Label>
              <Input
                secureTextEntry={true}
                onChangeText={Text =>
                  this.setState({ password: Text }, () =>
                    console.log(this.state.password)
                  )
                }
              />
            </Item>
          </Form>
          <Button onPress={this.login}>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
