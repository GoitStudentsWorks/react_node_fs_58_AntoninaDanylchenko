import { useState } from 'react';
import { UserLogoModal } from './UserLogoModal';
import { useSelector } from 'react-redux';
import {
  ButtonUser,
  UserLogoBox,
  TextUserLogo,
  ImgUser,
} from './Header.styled';

import { ButtonUser, UserLogoBox, TextUserLogo, ImgUser } from './Header.styled';


const UserLogo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const username = useSelector(state => state.auth.user.username);
  const avatarURL = useSelector(state => state.auth.user.avatarURL);
  return (
    <>
      <UserLogoBox>
        <ButtonUser onClick={open}>
          <ImgUser src={avatarURL} alt={username} loading="lazy" />
        </ButtonUser>
        <TextUserLogo>{username}</TextUserLogo>
        {isOpen && <UserLogoModal onClose={toggleModal} />}
      </UserLogoBox>
    </>
  );
};

export { UserLogo };
