import React from 'react';
import '../App.css';
import {SidebarData} from './SidebarData'

function SideBar() {
  return (
    <div className='SideBar'> 
        <ul className='SidebarList'>
            {SidebarData.map((val,key) => {
                return  <li key = {key}
                className= "row">
                     {" "}
                <div id ="title">{val.title}</div></li>;
            })}
        </ul>
    </div>
  );
}

export default SideBar
