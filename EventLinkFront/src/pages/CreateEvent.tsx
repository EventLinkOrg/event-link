import { useState } from "react";

const CreateEvent = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const close = () => {
    console.log("closed");
  };
  return (
    <>
      <button onClick={() => setOpenModal(!openModal)}>openModal</button>
    </>
  );
};

export { CreateEvent };
