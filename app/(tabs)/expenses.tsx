import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ChartPie as PieChart, Filter, ArrowUpRight, ArrowDownRight } from 'lucide-react-native';

const EXPENSES = [
  {
    id: '1',
    title: 'Groceries',
    group: 'Roommates',
    amount: -45.00,
    date: 'Yesterday',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=100&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Movie Night',
    group: 'Friday Night Crew',
    amount: 32.50,
    date: '2 days ago',
    image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=100&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Utilities',
    group: 'Roommates',
    amount: -85.00,
    date: '3 days ago',
    image: 'https://images.unsplash.com/photo-1626963781637-0d8124de3d54?q=80&w=100&auto=format&fit=crop',
  },
];

export default function ExpensesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Expenses</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#fff" />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.summaryContainer}>
          <View style={styles.summaryCard}>
            <View style={styles.summaryItem}>
              <View style={styles.summaryHeader}>
                <ArrowUpRight size={20} color="#ef4444" />
                <Text style={styles.summaryLabel}>You owe</Text>
              </View>
              <Text style={styles.summaryAmount}>$75.00</Text>
              <TouchableOpacity style={styles.summaryButton}>
                <Text style={styles.summaryButtonText}>Pay now</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />
            <View style={styles.summaryItem}>
              <View style={styles.summaryHeader}>
                <ArrowDownRight size={20} color="#4ade80" />
                <Text style={styles.summaryLabel}>You are owed</Text>
              </View>
              <Text style={[styles.summaryAmount, styles.positive]}>$120.00</Text>
              <TouchableOpacity style={styles.summaryButton}>
                <Text style={styles.summaryButtonText}>Remind all</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Expenses</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          {EXPENSES.map((expense) => (
            <TouchableOpacity key={expense.id} style={styles.expenseCard}>
              <Image source={{ uri: expense.image }} style={styles.expenseImage} />
              <View style={styles.expenseInfo}>
                <Text style={styles.expenseName}>{expense.title}</Text>
                <Text style={styles.expenseGroup}>{expense.group}</Text>
                <Text style={styles.expenseDate}>{expense.date}</Text>
              </View>
              <Text
                style={[
                  styles.expenseAmount,
                  expense.amount > 0 && styles.positiveAmount,
                ]}>
                {expense.amount > 0 ? '+' : ''}${Math.abs(expense.amount).toFixed(2)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Monthly Overview</Text>
          <View style={styles.statsCard}>
            <View style={styles.statsHeader}>
              <Text style={styles.statsTitle}>March 2024</Text>
              <TouchableOpacity style={styles.statsFilter}>
                <Text style={styles.statsFilterText}>This Month</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.statsContent}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Total Spent</Text>
                <Text style={styles.statAmount}>$487.50</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Total Received</Text>
                <Text style={styles.statAmount}>$325.00</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#fff',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  filterText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 6,
  },
  content: {
    flex: 1,
  },
  summaryContainer: {
    padding: 24,
    paddingTop: 0,
  },
  summaryCard: {
    backgroundColor: '#1e293b',
    borderRadius: 20,
    padding: 24,
    flexDirection: 'row',
  },
  summaryItem: {
    flex: 1,
  },
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#94a3b8',
    marginLeft: 6,
  },
  summaryAmount: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#ef4444',
    marginBottom: 12,
  },
  positive: {
    color: '#4ade80',
  },
  summaryButton: {
    backgroundColor: '#374151',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  summaryButtonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
  },
  divider: {
    width: 1,
    backgroundColor: '#334155',
    marginHorizontal: 24,
  },
  section: {
    padding: 24,
    paddingTop: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
  },
  seeAllText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#6366f1',
  },
  expenseCard: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  expenseImage: {
    width: 48,
    height: 48,
    borderRadius: 12,
  },
  expenseInfo: {
    flex: 1,
    marginLeft: 16,
  },
  expenseName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginBottom: 4,
  },
  expenseGroup: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#94a3b8',
    marginBottom: 4,
  },
  expenseDate: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
  },
  expenseAmount: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#ef4444',
    marginLeft: 16,
  },
  positiveAmount: {
    color: '#4ade80',
  },
  statsCard: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 20,
  },
  statsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  statsTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
  },
  statsFilter: {
    backgroundColor: '#374151',
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  statsFilterText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
  },
  statsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#94a3b8',
    marginBottom: 8,
  },
  statAmount: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#fff',
  },
});