import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { format } from 'date-fns';
import { useMutation } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const RequestModal = ({ isModalOpen, setModalOpen, food, onSuccess }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const [requestNote, setRequestNote] = useState('');
  const requesterEmail = user?.email;

  // useMutation to patch a data
  const { mutate, isLoading } = useMutation({
    mutationFn: async (requestData) => {
      const { data } = await axiosSecure.patch(`/food/${food._id}`, requestData);
      return data
    },
    onSuccess: () => {
      toast.success('Food has been requested Successfully!')
      setModalOpen(false);
      if (onSuccess) onSuccess();
    },
    onError: (error) => {
      toast.error(`Request failed: ${error.message}`);
    }
  })

  const handleRequest = () => {
    const requestData = {
      status: 'requested',
      requester: {
        requesterEmail,
        requestDate: new Date().toISOString(),
        requestNote
      }
    }
    mutate(requestData);
  }


  console.log(food);
  return (
    <div>
      <dialog id="my_modal_3" className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <form method="dialog">
            <button onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h2 className="text-2xl font-bold mb-4">Food Request Form</h2>
          <form>
            {/* Food ID */}
            <div className="mb-4">
              <label className="block text-sm">Food ID</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={food?._id}
                readOnly
              />
            </div>
            {/* Food Name */}
            <div className="mb-4">
              <label className="block text-sm">Food Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={food?.foodName}
                readOnly
              />
            </div>

            {/* Food Image */}
            <div className="mb-4">
              <label className="block text-sm">Food Image</label>
              <input
                type="url"
                className="input input-bordered w-full"
                value={food?.foodImg}
                readOnly
              />
            </div>

            {/* Food Donor name */}
            <div className="mb-4">
              <label className="block text-sm">Food Donor Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={food?.donor?.name}
                readOnly
              />
            </div>

            {/* Food Donor email */}
            <div className="mb-4">
              <label className="block text-sm">Food Donor Email</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={food?.donor?.email}
                readOnly
              />
            </div>
            {/* Food requesterEmail email */}
            <div className="mb-4">
              <label className="block text-sm">Food Requester Email</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={requesterEmail}
                readOnly
              />
            </div>
            {/* Food request date */}
            <div className="mb-4">
              <label className="block text-sm">Request Date</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={format(new Date(), 'P')}
                readOnly
              />
            </div>
            {/* food expiry date */}
            <div className="mb-4">
              <label className="block text-sm">Expiry Date</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={format(new Date(food?.expiryDate), 'P')}
                readOnly
              />
            </div>
            {/* food pickup location */}
            <div className="mb-4">
              <label className="block text-sm">Pickup Location</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={food?.location}
                readOnly
              />
            </div>

            {/* Additional Notes */}
            <div className="mb-4">
              <label className="block text-sm">Additional Request Notes</label>
              <textarea
                value={requestNote}
                onChange={(e) => setRequestNote(e.target.value)}
                className="textarea textarea-bordered w-full"
                placeholder="Add any additional request notes to the donor..."
              />
            </div>

            {/* Request Button */}
            <div className="modal-action">
              <button
                type="button"
                onClick={handleRequest}
                disabled={isLoading}
                className="btn bg-secondary text-primary hover:bg-accent"
              >
                Request
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default RequestModal;