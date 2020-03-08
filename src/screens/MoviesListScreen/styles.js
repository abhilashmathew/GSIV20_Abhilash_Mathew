import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")
import CONSTANTS from '../../utils/constants'

export default StyleSheet.create({
    activityIndicator: {
        width: width,
        paddingVertical: 20,
    },
    topContainer: {
        flexDirection: 'row',
        width: '100%',
    },
    searchbarContainer: {
        borderWidth: 0,
    },
    inputContainer: {
        backgroundColor: CONSTANTS.COLORS.MUTED,
        borderWidth: 1,
        borderRadius: 10
    },
    itemContainer: {
        width: '50%',
        backgroundColor: 'transparent',
        paddingHorizontal: '2%',
        paddingVertical: '2%'
    }
})