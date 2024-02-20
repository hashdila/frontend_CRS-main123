import React from 'react';

const Modal = ({ show, onClose, onApprove, onReject }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md w-64">
        <h3 className="text-lg font-bold mb-2">Approve or reject user</h3>
        <div className="flex justify-between">
          <button onClick={onApprove} className="bg-green-500 text-white py-2 px-4 rounded-md mr-2">
            Approve
          </button>
          <button onClick={onReject} className="bg-red-500 text-white py-2 px-4 rounded-md">
            Reject
          </button>
          <button onClick={onClose} className="text-gray-500">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;