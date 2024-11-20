import { useState } from "react";
import PlusIcon from "../../../assets/icons/PlusIcon";
import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";
import NewSupervisor from "../NewSupervisor/NewSupervisor";


const SupervisorHome: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      <h1 className="font-bold text-base text-[#303F58]">Supervisor</h1>

      <div className="ml-auto">
        <Button variant="primary" size="sm" onClick={handleModalToggle}>
          <PlusIcon color="white" width={20} height={20} />{" "}
          <p className="text-base font-medium">Create Supervisor</p>
        </Button>
      </div>

      <Modal open={isModalOpen} onClose={handleModalToggle}>
        <NewSupervisor onClose={handleModalToggle} />
      </Modal>
    </div>
  );
};

export default SupervisorHome;
