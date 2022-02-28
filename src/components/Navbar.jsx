/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-quotes */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../redux/userSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const { img } = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };
  const handleLogOut = () => {
    dispatch(setLogout());
    setVisible(!visible);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo>
              JuneStore
              <span>.</span>
            </Logo>
          </Link>
        </Left>

        <Right>
          <Link
            to="/allproducts"
            style={{
              textDecoration: 'none',
              color: '#444',
              marginRight: '50px',
            }}
          >
            <SearchContainer>Products</SearchContainer>
          </Link>
          {user ? (
            <UserProfile>
              {img ? (
                <ImageContent onClick={toggleVisible}>
                  <Image src={img} />
                </ImageContent>
              ) : (
                <div className="profile" onClick={toggleVisible}>
                  <AccountCircleIcon fontSize="large" />
                </div>
              )}
              <MenuProfile toggle={visible}>
                <h3>{user && user.name}</h3>
                <ul>
                  <li>
                    <Link
                      to={`/profile/${user.id}`}
                      style={{ textDecoration: 'none', color: '#444' }}
                    >
                      <span data-cy="log-out-button">Perfil</span>
                    </Link>
                  </li>
                  <li onClick={handleLogOut}>
                    <Link
                      to="/"
                      style={{ textDecoration: 'none', color: '#444' }}
                    >
                      <span data-cy="log-out-button">Logout</span>
                    </Link>
                  </li>
                </ul>
              </MenuProfile>
            </UserProfile>
          ) : (
            <>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <MenuButton>Registrarse</MenuButton>
              </Link>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <MenuButton>Iniciar Sesión</MenuButton>
              </Link>
            </>
          )}
          <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon fontSize="medium" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 60px;
  box-shadow: 10px 18px 5px 0px rgba(0, 0, 0, 0.05);
  z-index: 10000;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

// const Center = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const Logo = styled.div`
  font-size: 28px;
  color: #444;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 20px;
  span {
    color: #54bab9;
  }
`;

const SearchContainer = styled.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
`;

// const Input = styled.input`
//   border: none;
// `;

const MenuButton = styled.button`
  color: #fff;
  font-size: 14px;
  background: #54bab9;
  display: inline-block;
  cursor: pointer;
  border: none;
  padding: 5px 10px;
  margin-top: -5px;
  margin-left: 25px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  transition: 0.5s;
  font-family: Poppins;
  border-radius: 5px;
  :hover {
    color: #323332;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const UserProfile = styled.div`
  position: relative;
  top: 0;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  cursor: pointer;
`;

const MenuProfile = styled.div`
  ::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 15px;
    width: 20px;
    height: 20px;
    background: #fff;
    transform: rotate(45deg);
  }
  position: absolute;
  top: 50px;
  right: -10px;
  padding: 10px 0;
  background: #fff;
  width: 200px;
  box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
  box-shadow: -1px 3px 24px -1px rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 30000;
  ${(props) => {
    if (props.toggle) {
      return `
      visibility: visible;
      opacity: 1;
      `;
    }
    return `
    visibility: hidden;
    opacity: 0;
      `;
  }}
  h3 {
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 20px 0;
    font-weight: 500;
    color: #555;
    line-height: 1.2em;
  }

  ul li {
    list-style: none;
    margin-left: -10px;
    padding: 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-weight: 500;
      :hover {
        opacity: 1;
        color: #54bab9;
      }
    }
  }
`;

const ImageContent = styled.div`
  width: 35px;
  height: 35px;
  background: #fff;
  border-radius: 50%;
`;

const Image = styled.img`
  height: 35px;
  width: 35px;
  object-fit: contain;
  border-radius: 50%;
`;
