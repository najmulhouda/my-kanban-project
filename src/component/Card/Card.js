import React, { useState } from 'react';
import { GiStack } from "react-icons/gi";
import { CgNotes, CgCalendarDates } from "react-icons/cg";
import { IoChatbubblesOutline } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";
import Modal from '../Modal/Modal';

const Card = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [attachments, setAttachments] = useState([]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveAttachment = (attachment) => {
    setAttachments([...attachments, attachment]);
  };

  return (
    <div className="bg-gray-100 w-[400px] shadow-md p-4 space-y-4 items-center">
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img src="/man.jpg" alt="avatar" />
          </div>
          <p className="font-bold text-lg">Client Name</p>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img src="/man.jpg" alt="avatar" />
          </div>
          <p className="font-bold text-lg">Sadik Istiak</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <GiStack />
          <p>Lorem ipsum dolor sit amet corn...</p>
        </div>
        <div className="flex items-center">
          <CgNotes />
          <p>1/2</p>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-2">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src="/man.jpg" alt="avatar" />
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src="/man.jpg" alt="avatar" />
        </div>
        <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
          <p className="p-2">12+</p>
        </div>
        <div className="flex items-center">
          <IoChatbubblesOutline />
          <p>15</p>
        </div>

        {/* Attachment Button */}
        <button onClick={handleModalOpen} className="flex items-center">
          <GrAttachment />
          <p>{attachments.length}</p>
        </button>

        <div className="flex items-center">
          <CgCalendarDates />
          <p>30-12-2022</p>
        </div>
      </div>

      {/* Modal Component with ID */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={handleSaveAttachment}
        attachments={attachments}
        cardId={id}
      />
    </div>
  );
};

export default Card;
