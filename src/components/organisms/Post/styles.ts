import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    post: {
        marginTop: 52
    },
    postFooter: {
        width,
        paddingVertical: 15,
        paddingHorizontal: 10
    },
})