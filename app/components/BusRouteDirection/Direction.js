import styled from 'styled-components';

const Direction = styled.div`
  color: grey;
  text-transform: uppercase;
  text-align: center;
  float: left;
  :before {
    content: ${props => (props.direction === 'Inbound' ? `'in'` : `'out'`)};
  }
  width: 40px;
  font-size: 10px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 1px;
`;

export default Direction;
