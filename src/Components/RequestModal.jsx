import React from 'react';

const RequestModal = ({ isModalOpen, setModalOpen }) => {
    return (
        <div>
            <dialog id="my_modal_3" className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
                <div className="modal-box">
                    <form method="dialog">
                        <button onClick={()=> setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h2 className="text-2xl font-bold mb-4">Food Request Form</h2>
                    <form>
                        {/* Food Name */}
                        <div className="mb-4">
                            <label className="block text-sm">Food Name</label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                disabled
                            />
                        </div>

                        {/* Food Image */}
                        <div className="mb-4">
                            <label className="block text-sm">Food Image</label>
                            <input
                                type="url"
                                className="input input-bordered w-full"
                                disabled
                            />
                        </div>

                        {/* Additional Notes */}
                        <div className="mb-4">
                            <label className="block text-sm">Additional Notes</label>
                            <textarea
                                className="textarea textarea-bordered w-full"
                                placeholder="Add any additional notes..."
                            />
                        </div>

                        {/* Request Button */}
                        <div className="modal-action">
                            <button
                                type="button"
                                className="btn btn-primary"
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