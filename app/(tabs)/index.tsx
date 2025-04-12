import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Plus, TrendingUp, TrendingDown, DollarSign } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#1e293b', '#0f172a']}
        style={styles.header}>
        <View style={styles.profileHeader}>
          <View style={styles.profileInfo}>
            <Text style={styles.greeting}>Welcome back,</Text>
            <Text style={styles.name}>John Doe</Text>
          </View>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop' }}
            style={styles.avatar}
          />
        </View>

        <View style={styles.balanceCard}>
          <LinearGradient
            colors={['#4f46e5', '#6366f1']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.balanceGradient}>
            <View style={styles.balanceHeader}>
              <Text style={styles.balanceLabel}>Total Balance</Text>
              <DollarSign size={20} color="#fff" style={styles.balanceIcon} />
            </View>
            <Text style={styles.balanceAmount}>$1,234.56</Text>
            <View style={styles.balanceDetails}>
              <View style={styles.balanceItem}>
                <TrendingUp size={16} color="#4ade80" />
                <Text style={styles.balanceItemText}>Owed: $350.00</Text>
              </View>
              <View style={styles.balanceItem}>
                <TrendingDown size={16} color="#f87171" />
                <Text style={styles.balanceItemText}>You owe: $115.44</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        <TouchableOpacity style={styles.addExpenseButton}>
          <Plus size={24} color="#fff" />
          <Text style={styles.addExpenseText}>Add New Expense</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityList}>
          <TouchableOpacity style={styles.activityCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=100&auto=format&fit=crop' }}
              style={styles.activityImage}
            />
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Friday Night Dinner</Text>
              <Text style={styles.activitySubtitle}>with Friday Night Crew</Text>
              <Text style={styles.activityAmount}>-$45.00</Text>
              <Text style={styles.activityDate}>Today, 8:30 PM</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.activityCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=100&auto=format&fit=crop' }}
              style={styles.activityImage}
            />
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Grocery Shopping</Text>
              <Text style={styles.activitySubtitle}>with Roommates</Text>
              <Text style={[styles.activityAmount, styles.positiveAmount]}>+$28.50</Text>
              <Text style={styles.activityDate}>Yesterday</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickActionButton}>
            <View style={[styles.quickActionIcon, { backgroundColor: '#4ade80' }]}>
              <TrendingUp size={24} color="#fff" />
            </View>
            <Text style={styles.quickActionText}>Send Reminder</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <View style={[styles.quickActionIcon, { backgroundColor: '#f87171' }]}>
              <TrendingDown size={24} color="#fff" />
            </View>
            <Text style={styles.quickActionText}>Settle Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    padding: 24,
    paddingTop: 60,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileInfo: {
    flex: 1,
  },
  greeting: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#94a3b8',
    marginBottom: 4,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#fff',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginLeft: 16,
  },
  balanceCard: {
    marginBottom: 24,
    borderRadius: 24,
    overflow: 'hidden',
  },
  balanceGradient: {
    padding: 24,
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  balanceLabel: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    opacity: 0.9,
    marginRight: 8,
  },
  balanceIcon: {
    opacity: 0.9,
  },
  balanceAmount: {
    fontSize: 36,
    fontFamily: 'Inter-Bold',
    color: '#fff',
    marginBottom: 16,
  },
  balanceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceItemText: {
    marginLeft: 8,
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    opacity: 0.9,
  },
  addExpenseButton: {
    backgroundColor: '#6366f1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 16,
    marginBottom: 8,
  },
  addExpenseText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 12,
  },
  section: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#fff',
    marginBottom: 16,
  },
  activityList: {
    gap: 16,
  },
  activityCard: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
  },
  activityImage: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginRight: 16,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginBottom: 4,
  },
  activitySubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#94a3b8',
    marginBottom: 8,
  },
  activityAmount: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#ef4444',
    marginBottom: 4,
  },
  positiveAmount: {
    color: '#4ade80',
  },
  activityDate: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
  },
  quickActions: {
    flexDirection: 'row',
    gap: 16,
  },
  quickActionButton: {
    flex: 1,
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  quickActionText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
  },
});