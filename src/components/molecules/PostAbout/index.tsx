import React from 'react';
import { View, ImageProps } from 'react-native';

import { styles } from "../../../pages/Feed/styles";

import { PostLiked } from '../../atoms/PostLiked';
import { PostLikedAvatar } from '../../atoms/PostLikedAvatar';

type Props = {
    likes: string;
    avatar: ImageProps;
}

export function PostAbout({ likes, avatar }: Props) {
    return (
        <View style={styles.postAbout}>
            <PostLikedAvatar source={avatar} />
            <PostLiked value={likes} />
        </View>
    );
}