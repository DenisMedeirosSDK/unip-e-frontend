import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 30px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.text_light};
`;

export const Content = styled.div`
  padding: 56px 20px;
  background-color: ${({ theme }) => theme.colors.background};

  h1 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 30px;
    font-weight: 400;
  }
`;

export const Divider = styled.div`
  margin: 30px 0;
`;
