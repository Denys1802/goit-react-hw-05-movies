import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const WrappPage = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const WrapMovie = styled.div`
  display: flex;
  alight-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  margin-left: 20px;
`;
export const ListItem = styled.ul`
  display: flex;
`;
export const Item = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  margin-right: 10px;
  font-weight: bold;
  color: red;
  text-transform: uppercase;
`;
