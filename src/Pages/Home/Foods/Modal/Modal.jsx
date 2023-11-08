import RequForm from "./RequForm";

const Modal = ({ food }) => {


  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-outline text-pink-300"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Request
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <RequForm food={food} />
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
