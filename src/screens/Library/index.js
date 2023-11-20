import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import "./Library.css";
import { useNavigate } from "react-router-dom";
import cj from "./Img/crimejunkie.jpeg";
import ofm from "./Img/off_menu.jpeg";
import sysk from "./Img/Stuff You Should Know.jpeg";
import te from "./Img/Today Explained.avif";

export default function Library() {
  // const [playlists, setPlaylists] = useState(null);
  // const navigate = useNavigate();
  // const playPlaylist = (id) => {
  //   navigate("/player", { state: { id: id } });
  // };

  return (
    <div className="screen-container">
      <div className="library-body">
          <div className="playlist-card" /* key={playlist.id} onClick={() => playPlaylist(playlist.id)} */>
            <img src={cj} className="playlist-image" alt="Playlist-img"/>
            <p className="playlist-title">Crime Junkie</p>
            <p className="playlist-count"> "x" no of podcasts</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#000000" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
          <div className="playlist-card" /* key={playlist.id} onClick={() => playPlaylist(playlist.id)} */>
            <img src={ofm} className="playlist-image" alt="Playlist-img"/>
            <p className="playlist-title">Off Menu</p>
            <p className="playlist-count">"x" no of podcasts</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#000000" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
          <div className="playlist-card" /* key={playlist.id} onClick={() => playPlaylist(playlist.id)} */>
            <img src={sysk} className="playlist-image" alt="Playlist-img"/>
            <p className="playlist-title">Stuff You Should Know</p>
            <p className="playlist-count">"x" no of podcasts</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#000000" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
          <div className="playlist-card" /* key={playlist.id} onClick={() => playPlaylist(playlist.id)} */>
            <img src={te} className="playlist-image" alt="Playlist-img"/>
            <p className="playlist-title">Today Explained</p>
            <p className="playlist-count">"x" no of podcasts</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#000000" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
          <div className="playlist-card" /* key={playlist.id} onClick={() => playPlaylist(playlist.id)} */>
            <img src={cj} className="playlist-image" alt="Playlist-img"/>
            <p className="playlist-title">Title</p>
            <p className="playlist-count">"x" no of podcasts</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#000000" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
          <div className="playlist-card" /* key={playlist.id} onClick={() => playPlaylist(playlist.id)} */>
            <img src={cj} className="playlist-image" alt="Playlist-img"/>
            <p className="playlist-title">Title</p>
            <p className="playlist-count">"x" no of podcasts</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#000000" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>

          <div className="playlist-card" /* key={playlist.id} onClick={() => playPlaylist(playlist.id)} */>
            <img src={cj} className="playlist-image" alt="Playlist-img"/>
            <p className="playlist-title">Title</p>
            <p className="playlist-count">"x" no of podcasts</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#000000" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
          <div className="playlist-card" /* key={playlist.id} onClick={() => playPlaylist(playlist.id)} */>
            <img src={cj} className="playlist-image" alt="Playlist-img"/>
            <p className="playlist-title">Title</p>
            <p className="playlist-count">"x" no of podcasts</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#000000" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
          <div className="playlist-card" /* key={playlist.id} onClick={() => playPlaylist(playlist.id)} */>
            <img src={cj} className="playlist-image" alt="Playlist-img"/>
            <p className="playlist-title">Title</p>
            <p className="playlist-count">"x" no of podcasts</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#000000" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
          <div className="playlist-card" /* key={playlist.id} onClick={() => playPlaylist(playlist.id)} */>
            <img src={cj} className="playlist-image" alt="Playlist-img"/>
            <p className="playlist-title">Title</p>
            <p className="playlist-count">"x" no of podcasts</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#000000" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
      </div>
    </div>
  );
}
