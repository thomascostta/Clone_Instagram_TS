import React from "react";

import { View, FlatList, Image, Text } from "react-native";

import { Post } from "../../organisms/Post";

import { styles } from "../../../pages/Feed/styles";
import { posts } from "../../../utils/posts";

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
