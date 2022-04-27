import React from "react";

import { View, FlatList, Image, Text } from "react-native";

import { Post } from "../../organisms/Post";

import { styles } from "../../../pages/Feed/styles";
import { posts } from "../../../utils/posts";

import {
  MessengerIcon,
  FavoriteIcon,
  CommentIcon,
  CameraIcon,
  LogoIcon,
  IgtvIcon,
  SaveIcon,
  ProfileIcon,
} from "../../../global/styles/icons";

export function Posts() {
  return (
    <FlatList
      data={posts}
      style={styles.posts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(post) => post.id}
      renderItem={({ item }) => <Post data={item} />}
    />
  );
}
