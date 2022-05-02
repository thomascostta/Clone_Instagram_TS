import React from 'react';
import { View } from 'react-native';

import { styles } from "./styles";

import {
    MessengerIcon,
    FavoriteIcon,
    CommentIcon,
    SaveIcon
} from "../../../global/styles/icons";

import { ButtonIcon } from '../../atoms/ButtonIcon';

export function PostOptions() {
    return (
        <View style={styles.postOptions}>
            <View style={styles.postOptions}>
                <View style={styles.postOptionsSide}>
                    <ButtonIcon icon={FavoriteIcon} />
                    <ButtonIcon icon={CommentIcon} />
                    <ButtonIcon icon={MessengerIcon} />
                </View>

            </View>
            <ButtonIcon icon={SaveIcon} />
        </View>
    );
}