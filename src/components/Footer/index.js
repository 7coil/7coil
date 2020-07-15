import React, { Component } from 'react';
import PaddingContainer from '../PaddingContainer';
import styles from './index.module.scss';
import music from './music.json';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      song: null
    }
  }
  getRandomSong() {
    return music[Math.floor(music.length * Math.random())];
  }
  componentDidMount() {
    const song = this.getRandomSong();
    this.setState({
      song
    })
  }
  render() {
    const song = this.state.song;
    return (
      <footer className={styles.footer}>
        <div className={styles.links}>
          <PaddingContainer>
            {
              song &&
              <p>
                You should probably listen to <a href={song.uri.replace('spotify:track:', 'https://open.spotify.com/track/')} target="_blank" rel="noreferrer"><b>{song.name}</b></a> by <b>{song.artist}</b> in {!song.album.toLowerCase().startsWith('the') && 'the '}<b>{song.album}</b>{!song.album.toLowerCase().endsWith('album') && ' album'}.
              </p>
            }
            <p>
              <a href="https://github.com/7coil">GitHub</a>
            </p>
          </PaddingContainer>
        </div>
        <div className={styles.copyright}>
          <PaddingContainer>
            <i>Copyright Leondro Lio, 2015 - 2020</i>
          </PaddingContainer>
        </div>
      </footer>
    )
  }
}

export default Footer;
