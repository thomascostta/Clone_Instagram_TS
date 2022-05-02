import React from 'react';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
// OBS: BorderlessButton - Suitable for an icon-only button. Presents a behavior for each platform

import { styles } from "./styles";

type Props = BorderlessButtonProps & {
    icon: React.FC<SvgProps>;
}

export function ButtonIcon({ icon: Icon, ...rest }: Props) {
    return (
        <BorderlessButton style={styles.postOptionsIcon} {...rest}>
            <Icon />
        </BorderlessButton>
    );
}