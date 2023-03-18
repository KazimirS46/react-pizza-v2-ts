import Modal from '../../../ui/Modal';
import { PizzaInfo } from '../PizzaInfo';
import { IPizzaItem } from '../../../../types/types';
import { FC } from 'react';

interface IProps {
  data: IPizzaItem | null;
  isOpen: boolean;

  onClose(): void;
}

const PizzaModal: FC<IProps> = props => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      {props.data && (
        <PizzaInfo
          data={props.data}
          onClose={props.onClose}
        />
      )}
    </Modal>
  )
};

export default PizzaModal;
