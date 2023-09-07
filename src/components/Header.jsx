import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillHome, AiOutlineVideoCamera } from 'react-icons/ai';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  font-family: 'Arial', sans-serif;
  font-size: 24px;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const Nav = styled.nav``;

const NavLinkStyled = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  /* Підсвічуємо активну сторінку */
  &.active {
    font-weight: bold;
  }

  @media (max-width: 576px) {
    margin-right: 10px;
  }
`;

const IconWrapper = styled.span`
  margin-right: 5px;

  @media (max-width: 576px) {
    margin-right: 3px;
  }
`;

const Header = () => {
  const location = useLocation();
  const isHomeActive = location.pathname === '/';
  const isMoviesActive = location.pathname.startsWith('/movies');

  return (
    <HeaderContainer>
      <Logo>My Movie App</Logo>
      <Nav>
        <NavLinkStyled to="/" className={isHomeActive ? 'active' : ''}>
          <IconWrapper>
            <AiFillHome />
          </IconWrapper>
          <span style={{ fontFamily: 'Arial', fontSize: '18px' }}>Home</span>
        </NavLinkStyled>
        <NavLinkStyled to="/movies" className={isMoviesActive ? 'active' : ''}>
          <IconWrapper>
            <AiOutlineVideoCamera />
          </IconWrapper>
          <span style={{ fontFamily: 'Arial', fontSize: '18px' }}>Movies</span>
        </NavLinkStyled>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
