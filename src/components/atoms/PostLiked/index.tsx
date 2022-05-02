import React from "react";
import { View, Text, TextProps } from "react-native";

import { styles } from "./styles";

type Props = TextProps & {
  value: string;
}

export function PostLiked({ value }: Props) {
  return (
    <View>
      <Text style={styles.likes}>{value}</Text>
    </View>
  );
}
