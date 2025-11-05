import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const transactions = [
    { id: '1', date: '05-Nov-2025', description: 'UPI Payment to Zomato', type: 'Debit', amount: 450.00, balance: 12350.00 },
    { id: '2', date: '04-Nov-2025', description: 'Salary Credit - ABC Pvt Ltd', type: 'Credit', amount: 45000.00, balance: 12800.00 },
    { id: '3', date: '03-Nov-2025', description: 'ATM Withdrawal', type: 'Debit', amount: 2000.00, balance: 67800.00 },
    { id: '4', date: '02-Nov-2025', description: 'UPI Received from Riya', type: 'Credit', amount: 1200.00, balance: 69800.00 },
    { id: '5', date: '01-Nov-2025', description: 'Electricity Bill Payment', type: 'Debit', amount: 1500.00, balance: 68600.00 },
    { id: '6', date: '03-Nov-2025', description: 'ATM Withdrawal', type: 'Debit', amount: 2000.00, balance: 67800.00 },
    { id: '7', date: '02-Nov-2025', description: 'UPI Received from Riya', type: 'Credit', amount: 1200.00, balance: 69800.00 },
    { id: '8', date: '01-Nov-2025', description: 'Electricity Bill Payment', type: 'Debit', amount: 1500.00, balance: 68600.00 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.rowBetween}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={[styles.type, item.type === 'Credit' ? styles.credit : styles.debit]}>
          {item.type}
        </Text>
      </View>
      <Text style={styles.desc}>{item.description}</Text>
      <View style={styles.rowBetween}>
        <Text style={styles.amount}>₹ {item.amount.toFixed(2)}</Text>
        <Text style={styles.balance}>Bal: ₹ {item.balance.toFixed(2)}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    color: '#666',
    fontSize: 12,
  },
  desc: {
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 5,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  balance: {
    color: '#555',
  },
  type: {
    fontWeight: 'bold',
  },
  credit: {
    color: 'green',
  },
  debit: {
    color: 'red',
  },
});
