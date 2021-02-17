import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { SIZES } from '../../../../constants/themes';
import { COLORS } from '../../../../constants/colors';

const Card = ({ itemData, onPress, mainContainerCard }) => (
  <TouchableOpacity onPress={onPress} style={mainContainerCard || styles.mainContainerCard}>
    <View style={styles.card}>
      <View style={styles.cardImgWrapper}>
        <Icon
          name={itemData.isFav ? 'heart' : 'heart-outline'}
          size={30}
          onPress={() => console.log('heart')}
          style={[styles.heart, itemData.isFav ? styles.heartFull : styles.heartEmpty]}
        />
        <Image source={itemData.image} resizeMode="cover" style={styles.cardImg} />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{itemData.title}</Text>
        <Text numberOfLines={1} style={styles.cardDetails}>
          {itemData.description}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default Card;

const styles = StyleSheet.create({
  mainContainerCard: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  heartFull: { color: '#FF797A' },
  heartEmpty: { color: '#fff' },
  heart: {
    position: 'absolute',
    top: 10,
    right: 10,
    elevation: 1,
    zIndex: 1,
  },
  card: {
    width: 150,
    height: 150,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 5,
  },
  cardImgWrapper: {
    flex: 1,
    marginBottom: 30,
  },
  cardImg: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: SIZES.radius,
    borderTopLeftRadius: SIZES.radius,
  },
  cardInfo: {
    position: 'absolute',
    bottom: -20,
    height: 50,
    width: '100%',
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: SIZES.radius,
    borderBottomRightRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
