import React, { Component } from 'react';
import PaddingContainer from '../PaddingContainer';
import SocialMediaHandles from '../SocialMediaHandles';
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
              <div>
                <h2>Recommended Song</h2>
                <p>
                  You should probably listen to <b>{song.name}</b> by <b>{song.artist}</b> in {!song.album.toLowerCase().startsWith('the') && 'the '}<b>{song.album}</b>{!song.album.toLowerCase().endsWith('album') && ' album'}.
                </p>
                <iframe
                  src={`https://open.spotify.com/embed/track/${song.uri.replace('spotify:track:', '')}`}
                  title="Spotify"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                  className={styles.spotifyEmbed} />
              </div>
            }
            <SocialMediaHandles />
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
