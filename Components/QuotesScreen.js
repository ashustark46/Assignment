import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const QuotesScreen = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = () => {
    fetch('https://dummyjson.com/quotes')
      .then(response => response.json())
      .then(data => setQuotes(data.quotes || [])) 
      .catch(error => console.error(error));
  };

  return (
    <ImageBackground source={require("../Pictures/pexels-pixabay-235985.jpg")} style={styles.background}>
    <View style={styles.container}>
      <ScrollView>
        {quotes.map((quote, index) => (
          <View key={index} style={styles.quoteContainer}>
            <Text style={styles.quoteText}>"{quote.quote}"</Text>
            <Text style={styles.writerText}>- {quote.writer}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  quoteContainer: {
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 24,
    marginBottom: 5,
    
  },
  writerText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#888',
  },
});

export default QuotesScreen;
