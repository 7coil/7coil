import React, { Component } from 'react'
import PaddingContainer from '../PaddingContainer'
import * as styles from './index.module.scss'
import music from './music.json'

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      song: music[Math.floor(music.length * Math.random())],
    }
  }
  render() {
    const song = this.state.song
    return (
      <footer className={styles.footer}>
        <PaddingContainer>
          <p>Copyright Leondro Lio, 2015 - 2021</p>
          {song && (
              <p>
                You should probably listen to <i>{song.name}</i> by{' '}
                <i>{song.artist}</i> in{' '}
                {!song.album.toLowerCase().startsWith('the') && 'the '}
                <i>{song.album}</i>
                {!song.album.toLowerCase().endsWith('album') && ' album'}{' '}
                <a href={`https://open.spotify.com/track/${song.uri}`}>on Spotify</a>.
              </p>
          )}
        </PaddingContainer>
      </footer>
    )
  }
}

export default Footer
