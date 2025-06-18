/**
 * My To Do List App
 *
 * @format
 */

import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

export default function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (newTask) => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});





