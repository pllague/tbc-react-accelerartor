import { createUserAction } from "../app/actions";

const UserForm = ({
  setFormModal,
}: {
  setFormModal: (formModal: boolean) => void;
}) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      await createUserAction(formData);
      setFormModal(false);
    } catch (error) {
      console.error("Error occurred while handling form submission:", error);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-secondary/80 z-[999]">
      <form
        // action={createUserAction}
        onSubmit={handleSubmit}
        className="w-1/5 bg-secondary border-2 border-light_blue shadow-xl shadow-light_blue p-8 rounded-xl flex flex-col gap-3 justify-between items-start mx-auto"
      >
        <input
          className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
          type="text"
          name="age"
          placeholder="Age"
        />
        <div className="w-full flex gap-3">
          <button
            onClick={() => setFormModal(false)}
            className="w-full h-full border-0 bg-red-800 py-3 mx-auto text-white lg:text-[20px] rounded-[5px] hover:bg-orange transition-all transform duration-300 ease-linear"
          >
            Cancel
          </button>
          <button
            className="w-full h-full border-0 bg-yellow-600 dark:bg-blue-500 hover:bg-orange rounded-[5px] py-3 lg:py-auto px-7 font-small lg:text-[20px] lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
