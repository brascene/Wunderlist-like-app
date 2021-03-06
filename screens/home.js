import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList,
  TextInput, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome';

import { AddButton, SingleInputField, SingleTaskRow} from '../src/components/singleTask'
import { Button } from 'react-native-elements'

//next koraci: (finished)
/*
+ dodati redux, konfigurisat i napravit foldere za actions, reducers
+ napraviti akciju za unos novog taska koja ce u store dodavai novi task u niz stringova, sa keys
+ taj niz stringova i keyeva koristiti kao data za flatlist
+ napraviti renderItem komponentu za flatlist koja ce biti kao ona gore
*/

import actionNames from '../redux/actionNames'
import { connect } from 'react-redux'
import { addTask, taskDescriptionInserted } from '../redux/actions/addTask'
import { changeTaskStatus, resetTaskInput, clearAllTasks } from '../redux/actions/changeTaskStatus'

const {height, width} = Dimensions.get('window');
const checkArrows = ["ios-checkmark-circle-outline","md-checkmark-circle"]

class HifzApp extends Component {
  _keyExtractor = (item, index) => item.taskKey
  _currentStatus = (taskKey) => {
    let taskIndex = this.props.taskList.findIndex(x => x.taskKey === taskKey)
    if (taskIndex != -1) {
      return this.props.taskList[taskIndex].taskChecked ? checkArrows[1] : checkArrows[0]
    } else {
      return checkArrows[1]
    }
  }
  _clearAllTasks = () => {
    this.props.clearAllTasks()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <ImageBackground
          style={styles.imageStyle}
          source={require('../images/background.jpg')}>
            <View style={{backgroundColor: 'transparent', flexDirection:'row'}}>
            <AddButton
            resetTaskInput={this.props.resetTaskInput}
            addNewTask={this.props.addTask}
            currentTaskText={this.props.currentTaskText} />
            <SingleInputField
            addNewTask={this.props.addTask}
            resetTaskInput={this.props.resetTaskInput}
            currentText={this.props.currentTaskText}
            taskDescriptionInserted={this.props.taskDescriptionInserted} />
            </View>
            <View style={{backgroundColor: 'transparent', width:'100%',
             height:0.23*height, marginTop: 10}}>
              <FlatList
                data={this.props.taskList}
                keyExtractor={this._keyExtractor}
                renderItem={({item}) => <SingleTaskRow
                 message={item.taskDescription}
                 taskKey={item.taskKey}
                 taskStatusChanged={this.props.changeTaskStatus}
                 currentStatus={this._currentStatus}
                  />}
              />
            </View>
            <View style={{height: 3, width: width - 20,
            marginTop:10, marginLeft: 10, marginRight: 10,
             backgroundColor:'#fff'}}>
            </View>
            <View style={{backgroundColor: 'transparent', width:'100%',
             height:0.3*height, marginTop: 10}}>
              <FlatList
                data={this.props.completedTasks}
                keyExtractor={this._keyExtractor}
                renderItem={({item}) => <SingleTaskRow
                 message={item.taskDescription}
                 taskKey={item.taskKey}
                 taskStatusChanged={this.props.changeTaskStatus}
                 currentStatus={this._currentStatus}
                  />}
              />
            </View>
            <View style={{width:200, marginTop: 15,
               opacity: this.props.shouldShowDeleteButton,
               alignSelf: 'center', backgroundColor:'transparent'}}>
            <Button
              onPress={this._clearAllTasks}
              raised
              icon={{name: 'times-rectangle-o', type: 'font-awesome', size: 20}}
              textStyle={{
                textAlign: 'left',
                fontSize: 17, fontWeight: '800'
              }}
              buttonStyle = {{
                backgroundColor: '#2D1462', opacity: this.props.shouldShowDeleteButton,
                width:200, alignSelf:'center'
              }}
              title='Izbrisi sve' />
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

HifzApp.propTypes = {
  addTask: PropTypes.func.isRequired,
  taskDescriptionInserted: PropTypes.func.isRequired,
  resetTaskInput: PropTypes.func.isRequired,
  clearAllTasks: PropTypes.func.isRequired,
  currentTaskText: PropTypes.string,
  shouldShowDeleteButton: PropTypes.number,
  changeTaskStatus: PropTypes.func.isRequired,
  taskList: PropTypes.arrayOf(PropTypes.shape({
    taskKey: PropTypes.string.isRequired,
    taskDescription: PropTypes.string.isRequired,
    taskChecked: PropTypes.bool.isRequired
  }))
}

function mapStateToProps(state) {
  let tasks = state.addTaskReducer.taskList
  let completedTasks = tasks.filter(singleTask => singleTask.taskChecked)
  let allTasks = tasks.filter(singleTask => !singleTask.taskChecked)
  completedTasks.reverse()
  allTasks.reverse()
  let shouldShowDeleteButton = tasks.length > 0 ? 0.9 : 0.0
  return {
    currentTaskText: state.addTextForTask.message,
    completedTasks,
    taskList: allTasks,
    shouldShowDeleteButton
  }
}

export default connect(mapStateToProps, { addTask, taskDescriptionInserted, clearAllTasks, changeTaskStatus, resetTaskInput })(HifzApp)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    marginTop:10, marginRight: 10, marginLeft:10, color:'#fff', fontSize: 15, fontWeight: '500',
    textAlign:'left', backgroundColor: '#142842', opacity: 0.7,
     height:44, width: width-57, borderBottomColor: 'gray', borderWidth: 0.5
  },
  imageStyle: {
    flex:1,
    opacity: 0.8
  },
  imageView: {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%', height: '100%'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
