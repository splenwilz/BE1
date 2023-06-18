import React, { useState } from 'react';
import './Offcanvas.css';

interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Offcanvas: React.FC<OffcanvasProps> = ({ isOpen, onClose, children }) => {
  const [isContentVisible, setContentVisible] = useState<boolean>(false);

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setContentVisible(false);
    }
  };

  const handleBackdropClick = () => {
    onClose();
  };

  const handleContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  if (!isOpen && !isContentVisible) {
    return null;
  }

  return (
    <div
      className={`offcanvas ${isOpen ? 'offcanvas-open' : ''}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="offcanvas-backdrop" onClick={handleBackdropClick} />
      <div className="offcanvas-content" onClick={handleContentClick}>
        {children}
      </div>
    </div>
  );
};

export default Offcanvas;
