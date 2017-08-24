import React from 'react'
import { View, TouchableOpacity, TextInput, StyleSheet, Dimensions, Text, Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons'
const {height, width} = Dimensions.get('window');
import PropTypes from 'prop-types'

//*********************Add new task button*********************

export const AddButton = ({addNewTask, currentTaskText, resetTaskInput}) => (
<View style={{height:44, marginTop:10,marginLeft:10, backgroundColor:'transparent'}}>
  <TouchableOpacity
  activeOpacity={0.5}
  onPress={() => {
    if(currentTaskText !== '') {
      addNewTask(currentTaskText)
      Keyboard.dismiss()
      resetTaskInput()
    }
  }}
  >
  <View style={{marginTop:8.5}}>
    <Icon name="plus-circle" size={27} color="#fff" />
  </View>
  </TouchableOpacity>
</View>
)

AddButton.propTypes = {
  addNewTask: PropTypes.func.isRequired,
  resetTaskInput: PropTypes.func.isRequired,
  currentTaskText: PropTypes.string
}
//*********************Add new task button*********************


//*********************Single Input Field*********************

export const SingleInputField = ({taskDescriptionInserted, currentText}) => (
  <TextInput
    keyboardType='default'
    style={styles.textInput}
    placeholder="Create your new task"
    placeholderTextColor="#fff"
    value={currentText}
    onChangeText={(text) => taskDescriptionInserted(text)}
  />
)

SingleInputField.propTypes = {
  currentText: PropTypes.string.isRequired,
  taskDescriptionInserted: PropTypes.func.isRequired
}
//*********************Single Input Field*********************


//*********************Single Task Row*********************

export const SingleTaskRow = ({message, taskKey, taskStatusChanged, currentStatus}) => (
  <View style={{width:width-20, marginTop:5, marginLeft: 10, marginRight: 10,
    flexDirection:'row', justifyContent:'space-between',
  backgroundColor:'#142842', opacity: 0.7, borderBottomColor: 'gray', borderWidth: 0.5}}>
    <Text style={{marginTop: 10, fontSize:14, fontWeight: '500',
    width:0.8*width, marginLeft:20, paddingBottom: 12, paddingTop: 3,
    textAlign:'left', color:'#fff'}}>
      {message}
    </Text>
    <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
      <TaskStatus taskKey={taskKey} taskStatusChanged={taskStatusChanged} currentStatus={currentStatus} />
    </View>
  </View>
)

SingleTaskRow.propTypes = {
  message: PropTypes.string.isRequired,
  taskKey: PropTypes.string.isRequired,
  taskStatusChanged: PropTypes.func.isRequired,
  currentStatus: PropTypes.func.isRequired
}
//*********************Single Task Row*********************


//*********************Mark Task Statusw*********************
const checkArrows = ["ios-checkmark-circle-outline","md-checkmark-circle"]

export const TaskStatus = ({taskKey, taskStatusChanged, currentStatus}) => (
<View style={{height:44, backgroundColor:'transparent'}}>
  <TouchableOpacity
  activeOpacity={0.5}
  onPress={() => {
    taskStatusChanged(taskKey)
  }}
  >
  <View style={{marginTop:8.5}}>
    <IonIcon name={currentStatus(taskKey)} size={27} color="#fff"/>
  </View>
  </TouchableOpacity>
</View>
)

TaskStatus.propTypes = {
  taskKey: PropTypes.string.isRequired,
  taskStatusChanged: PropTypes.func.isRequired,
  currentStatus: PropTypes.func.isRequired
}
//*********************Mark Task Statusw*********************

const styles = StyleSheet.create({
  textInput: {
    marginTop:10, marginRight: 10, marginLeft:10, color:'#fff', fontSize: 15, fontWeight: '500',
    textAlign:'left', backgroundColor: '#142842', opacity: 0.7,
     height:44, width: width-57, borderBottomColor: 'gray', borderWidth: 0.5
  }
});
