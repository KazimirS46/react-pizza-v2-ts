import React from 'react';

interface IModalContext {
  visible: boolean;
  open: () => void;
  close: () => void;
}

export const ModalContext = React.createContext<IModalContext>({
  visible: false,
  open: () => {},
  close: () => {},
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const open = () => setVisible(true);
  const close = () => {
    setVisible(false);
  };

  return <ModalContext.Provider value={{ visible, open, close }}>{children}</ModalContext.Provider>;
};
