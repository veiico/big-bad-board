import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../global/App/App.styles';
import ButtonView from '../../../../components/Button/Button.view';

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const TitleText = styled.input`
  width: 100%;
  font-weight: bold;
  color: ${theme.colors.text};
`;

export const Close = styled.div`
  width: 30px;
  color: ${theme.colors.danger};
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

interface DescriptionProps {
  modalView?: boolean;
}

export const Description = styled.textarea<DescriptionProps>`
  width: 100%;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${({ modalView }) =>modalView ?  theme.colors.background : 'white'};
  border-radius: 8px;
`;

export const Meta = styled.div`
  margin-bottom: 40px;
`;

export const MetaText = styled.div`
  font-size: 12px;
  color: ${theme.colors.textDim};
  margin-bottom: 5px;
`;

export const MetaLink = styled(Link)`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const BackButton = styled(ButtonView)`
  margin-right: 15px;
  display: inline-block;
`;

export const DeleteButton = styled(ButtonView)`
  display: inline-block;
`;
