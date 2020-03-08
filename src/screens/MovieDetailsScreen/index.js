import React, { Component } from "react"
import { View, SafeAreaView, Image, Text } from "react-native"
import { formatedRuntime, castNames, movieImage, releaseYear, director } from '../../utils'
import { ScrollView } from "react-native-gesture-handler"
import styles from "./styles";

export default class MovieDetailsScreen extends Component {
    state = {
        movie: {
            casts:{}
        },
    }

    componentDidMount() {
        this.setState({
            movie: this.props.route.params.movie
        })
    }



    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1, }}>
                    <View style={styles.container}>
                        <Image style={styles.movieImage} source={{ uri: movieImage(this.state.movie.poster_path) }} />
                        <View style={styles.textRow}>
                            <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>{this.state.movie.title}</Text>
                            <Text style={styles.rating} numberOfLines={1}>{this.state.movie.adult ? ' (R) ' : ' (PR) '}</Text>
                        </View>
                        <View style={styles.textRow}>

                            <Text style={styles.info} numberOfLines={1}>{releaseYear(this.state.movie.release_date)}</Text>
                            <Text style={styles.info} numberOfLines={1}>{formatedRuntime(this.state.movie.runtime)}</Text>
                            <Text style={styles.info} numberOfLines={1}>{director(this.state.movie.casts.crew)}</Text>
                        </View>
                        <View style={styles.textRowCast}>

                            <Text style={styles.casts} ellipsizeMode="tail" numberOfLines={1}>Casts : {(castNames(this.state.movie.casts.cast)).toString() || 'No info available'}</Text>
                        </View>
                        <View style={styles.textRowDesc}>

                            <Text style={styles.desc} >Description : { this.state.movie.overview }</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
