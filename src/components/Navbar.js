import { Button, Dialog } from "@radix-ui/themes";
import { FaPlus } from "react-icons/fa6";
import AddTask from "./AddTask";

const Navbar = () => {
  return (
    <>
      {/*Header starts  */}
      <div className=" w-[85%] md:w-[89%] lg:w-[83%] h-16 px-4 flex justify-between items-center rounded-xl bg-white">
        <h1 className="text-2xl font-medium">Task manager</h1>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button
              className="cursor-pointer"
              size={"3"}
              radius="large"
              color="gray"
              variant="solid"
              highContrast
            >
              <FaPlus />
              Create
            </Button>
          </Dialog.Trigger>
          <Dialog.Content maxWidth={"380px"} >
            <AddTask></AddTask>
          </Dialog.Content>
        </Dialog.Root>
      </div>
      {/*Header ends  */}
    </>
  );
};

export default Navbar;
