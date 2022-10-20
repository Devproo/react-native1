import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import  SandBox from './components/sandBox'

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffe', key: '1' },
    { text: 'create app', key: '2' },
    { text: 'play awitch', key: '3' },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key)
    })
  }
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text, key: Math.random().toString() }, ...prevTodos]
      })
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('alert closed') },
      ])
    }
  }

  return (
  // <SandBox />
    <TouchableWithoutFeedback onPress={()=>{
      console.log('dismissed keyboard')
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content: {
    padding: 40,
   
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
})
