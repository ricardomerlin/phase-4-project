import React, { useEffect, useState } from 'react';

function SpotifyPlayer({accessToken}) {
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        accessToken = 'BQBhHeJ5kiZjT-Oq-XKHTaM1iRJOsj06KAzDcxrZ7EW0WFMH_rfvT1IS42IktlIvRSODpVud3jM-udGZTguwqDuadS7V-WWeow4H-Bs9hOAivdFNCFg'

        const scriptId = 'spotify-player';

        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://sdk.scdn.co/spotify-player.js';
            document.body.appendChild(script);

            script.onload = () => {
                const newPlayer = new window.Spotify.Player({
                    name: 'Web Player',
                    getOAuthToken: cb => { cb(accessToken); }
                });

                newPlayer.connect().then(success => {
                    if (success) {
                        console.log('The Web Playback SDK has been successfully connected.');
                    }
                });

                newPlayer.addListener('player_state_changed', state => {
                    console.log('Player State Changed:', state);
                });

                setPlayer(newPlayer);
            };
        }

        return () => {
            if (player) {
                player.disconnect();
            }
        };
    }, [accessToken, player]);

    const play = () => { if (player) player.togglePlay(); };
    const nextTrack = () => { if (player) player.nextTrack(); };
    const prevTrack = () => { if (player) player.previousTrack(); };

    return (
        <div>
            <button onClick={play}>Play/Pause</button>
            <button onClick={nextTrack}>Next Track</button>
            <button onClick={prevTrack}>Previous Track</button>
        </div>
    );
}

export default SpotifyPlayer;