import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  bacgroud-color: black;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex:1;

  display: flex;
  align-items: center;

`;
const Center = styled.div`
flex: 1;
text-align: center;
`;

const SearchContainter = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

const Input = styled.input`
border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.li`
  
  font-size: 14x;
  cursor: ponter;

  
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
   <Container>
    <Wrapper>
        <Left>
            <SearchContainter>
                <Input />
                <Search />
            </SearchContainter>
        </Left>
        <Center><Logo>_____BOOKSHOP_____</Logo></Center>
        <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SING IN</MenuItem>
        <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
        
    </Wrapper>

   </Container>
  );
};

export default Navbar;