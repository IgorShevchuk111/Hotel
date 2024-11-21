import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import ButtonIcon from '../../ui/ButtonIcon';
import { useLogout } from './useLogout';
import { SiPiaggiogroup } from 'react-icons/si';

function Logout() {
  const { isLoading, logout } = useLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SiPiaggiogroup />}
    </ButtonIcon>
  );
}

export default Logout;
