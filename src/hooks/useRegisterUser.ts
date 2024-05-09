import { useShowToast } from "./useShowToast";
import { useAppDispatch, useAppSelector } from ".";
import { addUser } from "../store/usersSlice";

type UserInputs = {
  email: string;
  name: string;
  username: string;
};

export const useRegisterUser = () => {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const toast = useShowToast();

  const handleRegisterUser = ({ email, name, username }: UserInputs) => {
    if (!email || !name || !username) {
      toast("Error", "Please fill all the fields", "error");
    } else if (users.find((u) => u.username === username)) {
      toast("Opps", "Username is already taken", "warning");
    } else {
      const user = {
        email,
        name,
        username,
      };

      dispatch(addUser(user));
      toast("Added", "User added successfully", "success");
    }
  };

  return { handleRegisterUser };
};
