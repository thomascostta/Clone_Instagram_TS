import React from "react";
import { View, Text, Image } from "react-native";

import { ProfileIcon } from "../../../global/styles/icons";
import { styles } from "./styles";

import { PostAvatar } from '../../atoms/PostAvatar';
import { PostUserName } from '../../atoms/PostUserName';
import { PostLocation } from '../../atoms/PostLocation';

type Props = {
  username: string;
  location: string;
}

export function PostHeader({ username, location }: Props) {
  return (
    <View style={styles.postHeader}>
      <PostAvatar source={ProfileIcon} />
      <View>
        <PostUserName value={username} />
        <PostLocation value={location} />
      </View>
    </View>
  );
}
