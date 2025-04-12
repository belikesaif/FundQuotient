import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Plus, Users, ArrowRight } from 'lucide-react-native';

const GROUPS = [
  {
    id: '1',
    name: 'Friday Night Crew',
    members: 4,
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=100&auto=format&fit=crop',
    balance: -25.00,
  },
  {
    id: '2',
    name: 'Roommates',
    members: 3,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=100&auto=format&fit=crop',
    balance: 45.50,
  },
  {
    id: '3',
    name: 'Road Trip Gang',
    members: 6,
    image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=100&auto=format&fit=crop',
    balance: 0,
  },
];

export default function GroupsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Groups</Text>
        <TouchableOpacity style={styles.addButton}>
          <Plus size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchText}>Search groups...</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Groups</Text>
          {GROUPS.map((group) => (
            <TouchableOpacity key={group.id} style={styles.groupCard}>
              <Image source={{ uri: group.image }} style={styles.groupImage} />
              <View style={styles.groupInfo}>
                <Text style={styles.groupName}>{group.name}</Text>
                <Text style={styles.groupMembers}>{group.members} members</Text>
              </View>
              <View style={styles.groupBalance}>
                {group.balance !== 0 && (
                  <>
                    <Text style={styles.balanceLabel}>
                      {group.balance < 0 ? 'You owe' : 'You are owed'}
                    </Text>
                    <Text
                      style={[
                        styles.balanceAmount,
                        group.balance > 0 && styles.positiveBalance,
                      ]}>
                      ${Math.abs(group.balance).toFixed(2)}
                    </Text>
                  </>
                )}
                {group.balance === 0 && (
                  <Text style={styles.settledText}>All settled up!</Text>
                )}
              </View>
              <ArrowRight size={20} color="#64748b" />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Create New Group</Text>
          <TouchableOpacity style={styles.createGroupCard}>
            <View style={styles.createGroupIcon}>
              <Users size={24} color="#6366f1" />
            </View>
            <View style={styles.createGroupContent}>
              <Text style={styles.createGroupTitle}>Start a new group</Text>
              <Text style={styles.createGroupDescription}>
                Split expenses with friends, family, or roommates
              </Text>
            </View>
          </TouchableOpacity>
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
  addButton: {
    backgroundColor: '#6366f1',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    padding: 24,
    paddingTop: 0,
    paddingBottom: 16,
  },
  searchButton: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    color: '#64748b',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  section: {
    padding: 24,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginBottom: 16,
  },
  groupCard: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  groupImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  groupInfo: {
    flex: 1,
    marginLeft: 16,
  },
  groupName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginBottom: 4,
  },
  groupMembers: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#94a3b8',
  },
  groupBalance: {
    marginRight: 12,
    alignItems: 'flex-end',
  },
  balanceLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#94a3b8',
    marginBottom: 4,
  },
  balanceAmount: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#ef4444',
  },
  positiveBalance: {
    color: '#4ade80',
  },
  settledText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#4ade80',
  },
  createGroupCard: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  createGroupIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#312e81',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createGroupContent: {
    flex: 1,
    marginLeft: 16,
  },
  createGroupTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginBottom: 4,
  },
  createGroupDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#94a3b8',
  },
});