import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ToDoList({ tasks }) {
  return (
    <ScrollView style={styles.container}>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  task: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 6,
    marginBottom: 8,
  },
  taskText: {
    fontSize: 16,
  },
});



