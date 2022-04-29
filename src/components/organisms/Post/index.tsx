import React from "react";
import { View, ImageProps } from "react-native";

import { styles } from "../../../pages/Feed/styles";

import { PostAbout } from '../../molecules/PostAbout';
import { PostPhoto } from '../../atoms/PostPhoto';
import { PostHeader } from '../../molecules/PostHeader';
import { PostOptions } from '../../molecules/PostOptions';
import { PostDescription } from '../../atoms/PostDescription';

type Profile = {
  id: string,
  name: string,
  avatar: ImageProps,
};

export type PostProps = {
  id: string,
  username: string,
  location: string,
  likes: string,
  cover: ImageProps,
  description: string,
  lastLiked: Profile,
};

type Props = {
  data: PostProps,
};

export function Post({ data }: Props) {

  return (
    <View style={styles.post}>
      <PostHeader
        username={data.username}
        location={data.location}
      />

      <PostPhoto source={data.cover} />

      <View style={styles.postFooter}>
        <PostOptions />

        <PostAbout
          likes={data.likes}
          avatar={data.lastLiked.avatar}
        />

        <PostDescription value={data.description} />

      </View>
    </View>
  );
}
