import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from "../../../pages/Feed/styles";

type Props = {
    likes: string;
    lastLiked: string;
}

export function PostAbout({ likes, lastLiked }: Props) {
    return (
        <View style={styles.postAbout}>
            <Image source={lastLiked} style={styles.lastLiked} />
            <Text style={styles.likes}>{likes}</Text>
        </View>
    );
}