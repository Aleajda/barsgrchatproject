import React, { Component } from 'react'
import { MenuMenu, MenuItem, Menu} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/authReducer';
const Header = (props) =>{
    const state = { activeItem: 'home' }

    const handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    const { activeItem } = state

    return (
      <div>
        <Menu pointing secondary>
          <MenuItem
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <MenuItem
            name='messages'
            active={activeItem === 'messages'}
            onClick={handleItemClick}
          />
          <MenuItem
            name='friends'
            active={activeItem === 'friends'}
            onClick={handleItemClick}
          />
          <MenuMenu position='right'>
            <MenuItem
              name='logout'
              onClick={props.logoutUser}
            />
          </MenuMenu>
        </Menu>
      </div>
    )
  }

export default connect(null, {logoutUser})(Header);
