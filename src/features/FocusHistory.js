import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <View style={styles.nothingContainer}>
        <View>
          <Text style={styles.nothing}>
            You haven't focused on anything yet.
          </Text>
        </View>
      </View>
    );

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1.5,
          width: '100%',
          backgroundColor: 'rgba(236, 236, 236, 0.5)',
          justifyContent: 'center',
        }}
      />
    );
  };

  const renderItem = ({ item }) => <Text style={styles.item}>  —  {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things you've focused on:</Text>
      <FlatList
        contentContainerStyle={{ borderRadius: 10, overflow: 'hidden' }}
        data={history}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemDivider}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: spacing.lg,
    paddingBottom: spacing.md,
    paddingRight: spacing.lg,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    paddingBottom: spacing.sm,
    //fontWeight: 'bold',
  },
  nothing: {
    color: colors.white,
    fontSize: fontSizes.lg,
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    // width: '60%',
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
  },
  nothingContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    //width: '60%',
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: '15%',
    marginRight: '15%'
  },
});
