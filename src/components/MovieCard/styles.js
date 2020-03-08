import { StyleSheet } from 'react-native'
import CONSTANTS from '../../utils/constants'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "../../utils/react-native-responsive-screen"

export default StyleSheet.create({
    itemContainer: {
        borderRadius: 10,
        height: hp('30%'),
        width: '100%',
        overflow: 'hidden',
        backgroundColor: CONSTANTS.COLORS.MUTED,
        shadowColor: CONSTANTS.COLORS.PLACEHOLDER,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        elevation: 10,
    },

    movieImage: {
        width: '100%',
        height: '75%',
        top: 0,
        marginTop: 0,
        paddingTop: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        resizeMode: 'stretch',
    },
    textRow: {
        width: '100%',
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: wp('2%'),
        paddingRight: wp('2%'),
        borderColor: CONSTANTS.COLORS.PLACEHOLDER,
    },

    title: {
        maxWidth: '75%',
        fontSize: wp('3.5%'),
        fontWeight: 'bold',
        color: CONSTANTS.GLOBAL_BLUE,
    },
    runtime: {
        maxWidth: '21%',
        justifyContent: 'flex-start',
        fontSize: wp('3.5%'),
        fontWeight: '800',
        color: CONSTANTS.COLORS.ERROR,
    },
    casts: {
        fontSize: wp('3.0%'),
        maxWidth: '100%',
        fontWeight: '800',
        justifyContent: 'flex-start',
        color: CONSTANTS.BLACK,
    },
    genre: {
        maxWidth: '75%',
        fontSize: wp('3.5%'),
        fontWeight: '800',
        color: CONSTANTS.BLACK,
    },
    rating: {
        maxWidth: '21%',
        justifyContent: 'flex-start',
        fontSize: wp('3.5%'),
        fontWeight: '800',
        color: CONSTANTS.COLORS.ERROR,
    },
})
