import React from 'react'
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import styles from './styles'


const ErrorComponent = ({ error, resetError, }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{'Oops!'}</Text>
                <Text style={styles.subtitle}>{'There\'s an error'}</Text>
                <Text style={styles.error}>{error.toString()}</Text>
                <Text style={styles.error}>Swipe Down to Refresh</Text>
            </View>
        </SafeAreaView>
    )
}

export default ErrorComponent