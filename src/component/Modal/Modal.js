import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modal = ({ isOpen, onClose, onSave }) => {
  const [files, setFiles] = useState([]);
  const [description, setDescription] = useState('');
  const [savedAttachments, setSavedAttachments] = useState([]);

  useEffect(() => {
    if (isOpen) {
      fetchAttachments();
    }
  }, [isOpen]);

  // Fetch saved attachments from the backend
  const fetchAttachments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/attachments');
      setSavedAttachments(response.data.attachments);
    } catch (error) {
      console.error('Error fetching attachments:', error);
    }
  };

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleSave = async () => {
    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));
    formData.append('description', description);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onSave(response.data.attachments);
      alert(`Files uploaded successfully. Total attachments: ${response.data.count}`);
      setFiles([]);
      setDescription('');
      fetchAttachments(); // Refresh saved attachments after upload
      onClose();
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Failed to upload files');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center   justify-center">
      <div className="bg-white p-6 rounded-lg w-[400px] h-[400px]  overflow-x-auto">
        <h2 className="text-lg font-bold mb-4">Attach Items</h2>

        <input type="file" multiple onChange={handleFileChange} className="mb-4" />
        
        <textarea
          placeholder="Add a description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        ></textarea>

        {/* List of Selected Files */}
        {files.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Selected Files:</h3>
            {files.map((file, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <p>{file.name}</p>
                <p>{file.name.split('.').pop()}</p> {/* File extension */}
              </div>
            ))}
          </div>
        )}

        {/* List of Saved Attachments */}
        {savedAttachments.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Saved Attachments:</h3>
            {savedAttachments.map((attachment, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <p>{attachment.name}</p>
                <p>{attachment.extension}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between">
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
