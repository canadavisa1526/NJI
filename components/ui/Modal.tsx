// components/ui/Modal.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onSubmit?: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md sm:max-w-lg w-[90%] sm:w-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-[#13294E] dark:text-white">{title}</DialogTitle>
        </DialogHeader>
        <div className="px-1 sm:px-4 pb-4">
          {children}
        </div>
       
      </DialogContent>
    </Dialog>
  );
};
