import { createContext, useContext, useState } from 'react';
import { HiEllipsisVertical } from 'react-icons/hi2';
import styled from 'styled-components';
import { useOutsideClick } from '../hooks/useOutsideClick';

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: absolute;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.$position.x}px;
  top: ${(props) => props.$position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [openedId, setOpenedId] = useState('');
  const [position, setPosition] = useState(null);

  const close = () => setOpenedId('');
  const open = (id) => setOpenedId(id);

  return (
    <MenusContext.Provider
      value={{ openedId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

function Toggle({ id }) {
  const { openedId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const buttonRect = e.target.closest('button').getBoundingClientRect();
    const mainContainer = document.querySelector('main');
    const mainRect = mainContainer.getBoundingClientRect();
    const scrollTop = mainContainer.scrollTop;

    setPosition({
      x: buttonRect.left - mainRect,
      y: buttonRect.bottom - mainRect.top + scrollTop + 8,
    });

    openedId === '' || openedId !== id ? open(id) : close();
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

function List({ id, children }) {
  const { openedId, position, close } = useContext(MenusContext);

  const { ref } = useOutsideClick(close, false);

  if (openedId !== id) return null;

  return (
    <StyledList ref={ref} $position={position}>
      {children}
    </StyledList>
  );
}

Menus.Button = Button;
Menus.List = List;
Menus.Toggle = Toggle;
Menus.Menu = Menu;

export default Menus;
