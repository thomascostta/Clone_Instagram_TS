import React from "react";
import { View, Text, TextProps } from "react-native";

import { styles } from "../../../pages/Feed/styles";

type Props = TextProps & {
  value: string;
}

export function PostDescription({ value }: Props) {
  return (
    <View>
      <Text style={styles.description}>{value}</Text>
    </View>
  );
}
