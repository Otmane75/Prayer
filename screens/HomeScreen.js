import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function HomeScreen() {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await axios.get(
          'https://api.aladhan.com/v1/timingsByCity?city=Paris&country=France&method=2'
        );
        setPrayerTimes(response.data.data.timings);
      } catch (error) {
        console.error("Erreur lors de la récupération des horaires de prière", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  if (loading) {
    return <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Horaires de prière</Text>
      {prayerTimes && Object.entries(prayerTimes).map(([name, time]) => (
        <View key={name} style={styles.prayerTime}>
          <Text style={styles.prayerName}>{name}</Text>
          <Text style={styles.prayerTimeText}>{time}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  prayerTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  prayerName: {
    fontSize: 18,
    fontWeight: '600',
  },
  prayerTimeText: {
    fontSize: 18,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
