import React from 'react';
import camera from '../../img/camera.png';

const Sidebar = props => {

  return (
    <div className='App-sidebar'>

      <div className='logo'>
        <img src={camera} alt='user-profile'/>
      </div>

      <div className='name'>James Sanchez</div>
      <div className='userType'>Admin</div>
      <div className='email'>james@medtrainer.com</div>

      <ul className='menu'>
        <li>Video Distribution</li>
        <li>Analytics Dashboard</li>
        <ul>
          <li>Monitoring Dashboard</li>
          <li>Monitoring Outbound</li>
        </ul>
        <li>Bundle Dashboard</li>
      </ul>

    </div>
  )

}

export default Sidebar;
