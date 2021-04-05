import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
  LogBox,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import {Button} from 'react-native-paper';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalStatusCard: false,
      Standard: '',
      Subject: '',
      Class: '',
      data: [
      ],
    };
  }
  setModalVisible(visible) {
    console.log('in func');
    this.setState({modalVisible: visible});
  }
  setModalVisibleStatusCard(visible) {
    console.log('in');
    this.setState({modalStatusCard: visible});
  }
  componentDidMount() {
    LogBox.ignoreLogs(['Warning: ...']);
  }
  toInputValues() {
    const val = {
      class: this.state.Class,
      Subject: this.state.Subject,
      Standard: this.state.Standard,
    };
    this.setState({data: [...this.state.data, val]});
    console.log(this.state.data)
  }
  render() {
    if (this.state.modalStatusCard == true) {
      setTimeout(() => {
        this.setState({modalStatusCard: false});
      }, 700);
    }
    return (
      <View style={styles.centeredView}>
      <KeyboardAvoidingView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={styles.centered}>
            <View style={styles.modalView}>
              <View>
                <Text style={{fontSize: 25}}>Add Class</Text>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.5,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: 40,
                  }}>
                  <Text style={{fontSize: 20}}>Class</Text>
                  <TextInput
                    placeholder="dbs class 10"
                    style={{fontSize: 20}}
                    onChangeText={Class => this.setState({Class})}
                    value={this.state.Class}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: 40,
                  }}>
                  <Text style={{fontSize: 20}}>Standard</Text>
                  <TextInput
                    placeholder="9/10"
                    keyboardType="numeric"
                    style={{fontSize: 20}}
                    onChangeText={Standard => this.setState({Standard})}
                    value={this.state.Standard}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: 40,
                  }}>
                  <Text style={{fontSize: 20}}>Subject</Text>
                  <TextInput
                    placeholder="Maths"
                    style={{fontSize: 20}}
                    onChangeText={Subject => this.setState({Subject})}
                    value={this.state.Subject}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: 40,
                  }}>
                  <Button
                    mode="contained"
                    style={{left: 20, paddingLeft: 10, paddingRight: 10}}
                    color="#2e8b57"
                    labelStyle={{fontSize: 20}}
                    onPress={() => {
                      {
                        this.setModalVisible(!this.state.modalVisible);
                        this.toInputValues();
                        this.setModalVisibleStatusCard(true);
                      }
                    }}>
                    Add
                  </Button>
                  <Button
                    mode="contained"
                    style={{marginLeft: 60, paddingLeft: 10, paddingRight: 10}}
                    color="#2e8b57"
                    labelStyle={{fontSize: 20}}
                    onPress={() =>
                      this.setModalVisible(!this.state.modalVisible)
                    }>
                    Cancel
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        </KeyboardAvoidingView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalStatusCard}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisibleStatusCard(!this.state.modalStatusCard);
          }}>
          <View style={[styles.centered, {top: 400}]}>
            <View style={styles.modalView}>
              <Image
                style={{height: 70, width: 70}}
                source={require('./src/assets/checkmark.png')}
              />
              <Text style={{fontWeight: 'bold', fontSize: 20}}> values</Text>
              <Text>has been sucessfully added</Text>
            </View>
          </View>
        </Modal>
        <View style={{flex: 8, flexDirection: 'column'}}>
          <View style={{flex: 0.5, flexDirection: 'column'}}>
            <Text style={{fontSize: 40, textAlign: 'center'}}>Classroom</Text>
          </View>
          {this.state.data.length == 0 && (
            <View style={{flex: 6, flexDirection: 'column'}}>
              <Text
                style={{
                  fontSize: 35,
                  color: 'red',
                  textAlign: 'center',
                  marginTop: 30,
                }}>
                Oops!!
              </Text>
              <Text
                style={{
                  fontSize: 35,
                  color: 'red',
                  textAlign: 'center',
                  marginTop: 30,
                }}>
                Looks like there are no classes created yet
              </Text>
            </View>
          )}
          {this.state.data.length != 0 && (
            <View
              style={{
                flex: 6,
                flexDirection: 'column',
                flexWrap: 'nowrap',
                marginTop: 20,
              }}>
              <ScrollView>
                <FlatList
                  keyExtractor={item => item.id}
                  data={this.state.data}
                  renderItem={({item}) => {
                    return (
                      <View>
                        <View
                          style={{
                            marginLeft: 20,
                            marginRight: 20,
                            height: 120,
                            borderWidth: 2,
                            borderRadius: 10,
                            marginBottom: 40,
                            top: 25,
                            alignContent: 'center',
                            justifyContent: 'center',
                            borderRadius: 16,
                          }}>
                          <View style={{flexDirection: 'row', flex: 1}}>
                            <View
                              style={{
                                width: 19,
                                height: 116.5,
                                borderRadius: 20,
                                backgroundColor: '#FFC107',
                              }}></View>
                            <View
                              style={{
                                flexDirection: 'column',
                                flex: 1,
                                left: 10,
                              }}>
                              <Text
                                style={{
                                  fontSize: 20,
                                  fontWeight: 'bold',
                                  marginBottom: 10,
                                }}>
                                Group 12 Class {item.Standard}
                              </Text>
                              <Text style={{fontSize: 15, marginBottom: 7}}>
                                {item.Standard} {item.Subject}
                              </Text>
                              <Text style={{fontSize: 15, marginBottom: 7}}>
                                Students {item.class}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    );
                  }}
                />
              </ScrollView>
            </View>
          )}
          <View style={{flex: 1, flexDirection: 'column', marginTop: 20}}>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => this.setModalVisible(true)}>
              <Text style={styles.textStyle}>Add Classroom</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    position: 'absolute',
    top: 300,
    width: '100%',
    height: '90%',
  },
  centeredView: {
    flex: 9,
    marginTop: 22,
  },
  modalView: {
    top: 220,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    position:'absolute',
    width:Dimensions.get('window').width/1.5,
    left:Dimensions.get('window').width/6,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#2F91B9',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:25,
    fontWeight:'bold',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
