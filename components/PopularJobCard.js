import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const PopularJobCard = ({ job }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.salary}>{job.salary}</Text>
      <Text style={styles.location}>{job.location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 16,
    color: '#555',
  },
  salary: {
    fontSize: 16,
    color: '#333',
  },
  location: {
    fontSize: 14,
    color: '#777',
  },
});

export default PopularJobCard;
