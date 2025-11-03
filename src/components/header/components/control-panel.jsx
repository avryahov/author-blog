/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Icon } from '../../icon/icon';
import { useNavigate } from 'react-router-dom';

const RightAligned = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '32px',
});

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <RightAligned>
        <Icon id="fa-backward" margin="12px 0 0 0" onClick={() => navigate(-1)} />

        <>
          <Icon id="fa-file-text-o" margin="10px 0 0 18px" onClick={() => navigate('/post')} />

          <Icon id="fa-users" margin="10px 5px 0 18px" onClick={() => navigate('/users')} />
        </>
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)``;
