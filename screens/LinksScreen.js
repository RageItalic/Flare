import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import RNSchedule from 'rnschedule';

const data = [
  {
    title: 'Lunch Appointment',
    subtitle: 'With Harry',
    start: new Date(2020, 1, 18, 19, 20),
    end: new Date(2020, 1, 18, 20, 20),
    color: '#390099',
  }
]

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <ExpoLinksView />
      <RNSchedule
      dataArray={data}
      onEventPress={(appt) => console.log(appt)}
      />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
