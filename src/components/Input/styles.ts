import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin-bottom: 10px;
`;

export const Label = styled.p`
  margin-bottom: 10px;
`;

export const InputText = styled.input`
  height: 56px;
  width: 100%;
  padding: 0 10px;
  border: 1px solid;
  border-radius: 10px;
  background-color: #f5f8fa;
  border-color: #dce2e5;

  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`;
