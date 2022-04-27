import React from "react";

import { View, FlatList, Image, Text } from "react-native";

import { styles } from "../../../pages/Feed/styles";
import {posts} from '../../../utils/posts';

import {
    MessengerIcon,
    FavoriteIcon,
    CommentIcon,
    CameraIcon,
    LogoIcon,
    IgtvIcon,
    SaveIcon,
    ProfileIcon
  } from '../../../global/styles/icons';

export function Posts() {
  return (
    <FlatList
      data={posts}
      style={styles.posts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(post) => post.id}
      renderItem={({ item }) => (
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image source={ProfileIcon} style={styles.postAvatar} />
            <View>
              <Text style={styles.postUsername}>Thomas</Text>
              <Text style={styles.postLocation}>Somewhere</Text>
            </View>
          </View>

          <Image source={item.cover} style={styles.cover} />

          <View style={styles.postFooter}>
            <View style={styles.postOptions}>
              <View style={styles.postOptionsSide}>
                <FavoriteIcon style={styles.postOptionsIcon} />
                <CommentIcon style={styles.postOptionsIcon} />
                <MessengerIcon style={styles.postOptionsIcon} />
              </View>

              <SaveIcon />
            </View>

            <View style={styles.postAbout}>
              <Image source={item.lastLiked.avatar} style={styles.lastLiked} />
              <Text style={styles.likes}>{item.likes}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      )}
    />
  );
}
