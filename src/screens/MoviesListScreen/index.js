import React, { Component } from "react"
import { View, FlatList, ActivityIndicator, SafeAreaView } from "react-native"
import styles from './styles'
import { connect } from "react-redux"
import MovieCard from "../../components/MovieCard"
import { getUpcomingMoviesList, handleSearchTextChange, handleRefresh, getSearchedMovies } from "../../actions"
import { genreNames, formatedRuntime, castNames, movieImage } from '../../utils'
import { SearchBar } from 'react-native-elements'
import ErrorComponent from "../../components/ErrorComponent"


export class MoviesListScreen extends Component {
  state = {
    page: 1,
    searchText: '',
  }

  componentDidMount() {
    this.handleRefresh()
  }

  handleSearchTextChange = query => {
    this.setState({
      searchText: query
    })
  }

  clearSearch = () => {
    this.setState({ searchText: '' })
    this.handleRefresh()
  }


  handleRefresh = () => {
    this.setState(
      {
        page: 1,
      },
      () => {
        this.props.handleRefresh()
        if (this.state.searchText.length == 0)
          this.props.getUpcomingMoviesList(this.state.page)
        else
          this.props.getSearchedMovies(this.state.searchText, this.state.page)
      },
    )
  }

  handleLoadMore = () => {
    if (this.state.page < this.props.movies.totalPages)
      this.setState(
        {
          page: this.state.page + 1,
        },
        () => {

          if (this.state.searchText.length == 0)
            this.props.getUpcomingMoviesList(this.state.page)
          else
            this.props.getSearchedMovies(this.state.searchText, this.state.page)
        },
      )
    else
      this.setState({
        page: this.state.page + 1,
      })
  }


  handleSearchTextSubmit = () => {
    this.props.handleSearchTextChange(this.state.searchText)
  }

  renderHeader = () => {
    return <SearchBar
      placeholder="Search"
      onChangeText={this.handleSearchTextChange}
      onClear={this.handleRefresh}
      lightTheme={true}
      value={this.state.searchText}
      containerStyle={styles.searchbarContainer}
      inputContainerStyle={styles.inputContainer}
      round
      onSubmitEditing={this.handleSearchTextSubmit}
    />
  }

  renderFooter = () => {
    if ((this.props.movies.loading && this.state.page == 1) || (this.props.movies.error != null) || (this.state.page > this.props.movies.totalPages)) return null

    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator animating size="large" />
      </View>
    )
  }

  renderItem = ({ item }) => (

    <View style={styles.itemContainer} >
      <MovieCard
        item={item}
        name={item.title}
        adult={item.adult}
        imageLink={movieImage(item.poster_path)}
        casts={castNames(item.casts.cast)}
        genre={genreNames(item.genres)}
        runtime={formatedRuntime(item.runtime)}
        rating={item.vote_average}
        onItemPress={() =>
          this.props.navigation.navigate("MovieDetails", { movie: item })
        }
      />
    </View>

  )

  render() {
    return (
      <SafeAreaView>
        <FlatList
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
          maxToRenderPerBatch={6}
          initialNumToRender={0}
          numColumns={2}
          data={this.props.movies.movieList}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={(this.props.movies.error != null) ? (<ErrorComponent error={this.props.movies.error} resetError={this.handleRefresh} />) : null}
          onRefresh={this.handleRefresh}
          refreshing={this.props.movies.loading && this.state.page == 1}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.5}
        />

      </SafeAreaView>
    )
  }
}


const mapStateToProps = state => {
  return { movies: state.movies }
}

const mapDispatchToProps = {
  getUpcomingMoviesList,
  handleSearchTextChange,
  getSearchedMovies,
  handleRefresh,
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListScreen)