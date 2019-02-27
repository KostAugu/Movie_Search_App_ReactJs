import React from 'react';
import styles from './autocomplete.css';
import SearchResult from './SearchResult';
import Movie from './Movie';
import PlayerSvg from '../images/player.svg';
import SearchSvg from '../images/Search.svg';

class Autocomplete extends React.Component 
{
  constructor() {
    super();
    this.state = {
      searchInput: "",
      results: [],
      selected: false,
      selectedMovie: "",
      focused: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);    
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.setWrapperRef2 = this.setWrapperRef2.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchInput !== prevState.searchInput && !this.state.selected) {
      const searchPhrase = this.state.searchInput.trim();
      if (searchPhrase.length > 2) {
        const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=cab2afe8b43cf5386e374c47aeef4fca&language=en-US&query=" 
        + searchPhrase
        + "&page=1&include_adult=false";
        fetch(searchUrl)
        .then(response => response.json())
        .then(response => {
            const results = response.results; 
            const length = results.length > 8 ? 8 : results.length;
            const movies = [];
            for (let i = 0; i< length; i++) {
              movies.push(results[i]);
            }
            this.setState({ results: movies });
        });
      } else {
        this.setState({ results: [] });
      }
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  setWrapperRef2(node) {
    this.wrapperRef2 = node;
  }

  handleChange(event) {   
    const {name, value} = event.target;
    this.setState({
      [name]: value,
      selected: false
    });
  }

  handleClick(event) {   
    const {id} = event.currentTarget;
    const moviesArray = this.state.results;    
    const movie = [];
    moviesArray.forEach(item => {
      item.id == id && movie.push(item);
    });
    this.setState({
      selectedMovie: movie[0],
      searchInput: movie[0].original_title,
      results: [],
      selected: true
    });
  }

  handleFocus() {
    this.setState({
      focused: true
    });
  }

  handleClickOutside(event) {
    if ((this.wrapperRef && !this.wrapperRef.contains(event.target)) && (this.wrapperRef2 && !this.wrapperRef2.contains(event.target))) {
      this.setState({
        focused: false
      });
    }
  }

  render() {
    const moviesArray = this.state.results.map(movie => <SearchResult key={movie.id} movie={movie} handleClick={this.handleClick}/>);
    return (
      <div className={styles.main}>
        <div  className={styles.dropdown}>  
          <div className={styles.dropdownContent}>
            <div ref={this.setWrapperRef}  className={styles.searchBar}>  
              <div className={styles.playerSvg}>
                <PlayerSvg />
              </div>    
              <input className={styles.myInput} type="text" onFocus={this.handleFocus} onChange={this.handleChange} name="searchInput"  value={this.state.searchInput} placeholder="Enter movie name"/>
              <div className={styles.searchSvg}>
                <SearchSvg />
              </div>   
            </div>
            <div ref={this.setWrapperRef2} className={moviesArray.length > 0 && this.state.focused ? styles.movieList : styles.hide}>
              {moviesArray}
            </div>
          </div>
        </div>        
        {this.state.selectedMovie ? <Movie data={this.state.selectedMovie}/> : ""}
      </div>
    )
  }
}

export default Autocomplete;