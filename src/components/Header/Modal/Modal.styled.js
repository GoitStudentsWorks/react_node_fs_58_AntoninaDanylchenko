import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0.01, 0.01, 0.01);
  border-radius: 10px;
`;

export const ModalW = styled.div`
  position: absolute;
  top: 80px;
  right: 60px;
  width: 161px;
  height: 130px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  border-radius: 10px;
  background-color: ${p => p.theme.primary.userBg};
  transform: ${({ isOpen }) =>
    !isOpen ? 'translateY(-10%)' : 'translateY(0)'};
  transition: ${p => p.theme.transition};
  border: 1px solid ${p => p.theme.primary.selectBg};

  &:hover,
  .focus {
    border: 1px solid #8baa36;
  }

  @media ${p => p.theme.device.tablet} {
    top: 90px;
    right: 125px;
    width: 177px;
    height: 144px;
    gap: 32px;
  }

  @media (min-width: 1100px) and (max-width: 1200px) {
    top: 95px;
    right: 340px;
  }

  @media ${p => p.theme.device.desktop} {
    top: 95px;
    right: 250px;
  }
`;
