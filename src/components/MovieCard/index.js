import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import API_CONFIG from '../../api'
import styles from "./styles";

const MovieCard = ({ name, adult, imageLink, casts, genre, runtime, rating, onItemPress, }) => {
    return (
        <>
            <TouchableOpacity style={styles.itemContainer} onPress={onItemPress}>
                <Image style={styles.movieImage} source={{ uri: imageLink }} />
                <View style={styles.textRow}>
                    <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>{name}</Text>
                    <Text style={styles.runtime} numberOfLines={1}>{runtime}</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={styles.casts} ellipsizeMode="tail" numberOfLines={1} >
                        {casts.toString() || 'Cast - No Info'}
                    </Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={styles.genre}  ellipsizeMode="tail">{genre.toString() || 'Genres - No Info'}</Text>
                    <Text style={styles.rating}>{adult ? ' (R) ' : ' (PR) '}</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default MovieCard

