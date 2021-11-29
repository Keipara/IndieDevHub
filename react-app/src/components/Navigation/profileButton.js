import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import * as sessionActions from '../../store/session';
import { NavLink } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className='logout-button' onClick={openMenu}>
        <i className="fas fa-user-circle" />
        {showMenu && (
          <div className='dropdown-div'>
            <ul className="profile-dropdown">
              <li>
                <NavLink key={user.username} to={`/artist/${user.id}`}>
                      <div className="primary-text">
                          {user.username}
                      </div>
                </NavLink>
              </li>
              <li>
                <button  onClick={logout} >
                  <Link to='/'>
                    Log Out
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        )}
      </button >
    </>
  );
}

export default ProfileButton;
