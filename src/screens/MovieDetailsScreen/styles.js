import { StyleSheet, Dimensions } from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "../../utils/react-native-responsive-screen"
import CONSTANTS from '../../utils/constants'

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: wp('100%'),
        paddingHorizontal: wp('2%'),
    },
    movieImage: {
        width: '100%',
        height: hp('40%'),
        marginVertical: hp('2%'),
        resizeMode: 'stretch',
    },
    textRow: {
        width: '100%',
        height: hp('5%'),
        flexDirection: 'row',
        paddingLeft: wp('2%'),
        paddingRight: wp('2%'),
        borderColor: CONSTANTS.COLORS.PLACEHOLDER,
    },
    textRowCast: {
        width: '100%',
        height: hp('5%'),
        flexDirection: 'row',
        paddingLeft: wp('2%'),
        paddingRight: wp('2%'),
        marginTop: -hp('2%'),
        borderColor: CONSTANTS.COLORS.PLACEHOLDER,
    },
    textRowDesc: {
        width: '100%',
        minHeight: hp('30%'),
        maxHeight: hp('100%'),
        flexDirection: 'row',
        paddingLeft: wp('2%'),
        paddingRight: wp('2%'),
        borderColor: CONSTANTS.COLORS.PLACEHOLDER,
    },

    title: {
        maxWidth: '75%',
        fontSize: wp('5%'),
        fontWeight: 'bold',
        color: CONSTANTS.BLACK,
    },
    rating: {
        maxWidth: '21%',
        justifyContent: 'flex-start',
        fontSize: wp('5%'),
        fontWeight: '800',
        color: CONSTANTS.COLORS.PLACEHOLDER,
    },
    info: {
        maxWidth: '100%',
        justifyContent: 'flex-start',
        fontSize: wp('5%'),
        fontWeight: '800',
        color: CONSTANTS.COLORS.BLACK,
    },
    casts: {
        fontSize: wp('5%'),
        maxWidth: '100%',
        fontWeight: '800',
        justifyContent: 'flex-start',
        color: CONSTANTS.BLACK,
    },
    desc: {
        fontSize: wp('5%'),
        maxWidth: '100%',
        fontWeight: '800',
        textAlign: 'justify',
        color: CONSTANTS.BLACK,
    }
})