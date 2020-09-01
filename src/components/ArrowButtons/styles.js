import styled from 'styled-components';

export const Arrows = styled.div`
  display: flex;
  padding: 5px;
  margin: 50px auto 0;
`

export const Arrow = styled.div`
  width: 0; 
  height: 0; 
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #29ABE2;
  position: relative;
  margin: 5px 30px;
  
  :after {
    content: '';
    height: 30px;
    width: 20px;
    background-color: #29ABE2;
    position: absolute;
    top: -50px;
    left: -10px;
  }

  :hover {
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #0071BC;

    :after {
      background-color: #0071BC;
    }
  }
`