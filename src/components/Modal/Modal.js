import { Component } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.scss';

const modal = document.querySelector('#modal');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.toggleModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.toggleModal);
  }

  toggleModal = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img src={src} alt={alt} />
        </div>
      </div>,
      modal,
    );
  }
}

export default Modal;
