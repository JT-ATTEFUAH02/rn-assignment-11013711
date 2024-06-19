import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import FeaturedJobCard from './components/FeaturedJobCard';
import PopularJobCard from './components/PopularJobCard';

const jobs = {
  featured: [
    { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
    { id: '2', title: 'Data Scientist', company: 'Google', salary: '$160,000', location: 'Nairobi, Kenya' },
    // Add more job data...
  ],
  popular: [
    { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US' },
    { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US' },
    // Add more job data...
  ]
};

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome, {name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <FlatList 
        data={jobs.featured}
        renderItem={({ item }) => <FeaturedJobCard job={item} />}
        keyExtractor={(item) => item.id}
        horizontal
      />
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <FlatList 
        data={jobs.popular}
        renderItem={({ item }) => <PopularJobCard job={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});

export default HomeScreen;
