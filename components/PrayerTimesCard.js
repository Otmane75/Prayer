import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PrayerTimesCard = ({ name, time }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.prayerName}>{name}</Text>
      <Text style={styles.prayerTime}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  prayerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  prayerTime: {
    fontSize: 18,
    color: '#555',
  },
});

export default PrayerTimesCard;
