import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangename] = React.useState('NAME: ');
  const [age, onChangeage] = React.useState('AGE: ');
  const [address, onChangeaddress] = React.useState('ADDRESS: ');
  const [school, onChangeschool] = React.useState('SCHOOL: ');
  const [course, onChangecourse] = React.useState('COURSE: ');
  const [email, onChangeemail] = React.useState('EMAIL: ');
  const [contactnumber, onChangecontactnumber] = React.useState('CONTACT NUMBER: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
        style={styles.input}
        onChangeText={onChangename}
        value={name}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeage}
        value={age}
      /><TextInput
        style={styles.input}
        onChangeText={onChangeaddress}
        value={address}
      /><TextInput
        style={styles.input}
        onChangeText={onChangeschool}
        value={school}
      /><TextInput
        style={styles.input}
        onChangeText={onChangecourse}
        value={course}
      /><TextInput
        style={styles.input}
        onChangeText={onChangeemail}
        value={email}
      /><TextInput
        style={styles.input}
        onChangeText={onChangecontactnumber}
        value={contactnumber}
      />
    </SafeAreaView>
  </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;