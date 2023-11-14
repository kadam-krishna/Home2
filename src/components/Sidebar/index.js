import React from 'react'
import './sidebar.css';
import SidebarButton from './SidebarButton';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
export default function Sidebar() {
  return (
    <div className='sidebar-container'>
        <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/imgTag.png" className='profile-img' alt='profile'/>
        <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favourites"
          to="/favourites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>

  )
}
