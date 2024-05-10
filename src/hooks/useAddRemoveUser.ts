import { useAppSelector, useAppDispatch } from ".";
import { addUser, removeUser } from "../store/usersSlice";
import { useShowToast } from "./useShowToast";
import { IUser } from "../types";

export const useAddRemoveUser = (user: IUser) => {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const toast = useShowToast();

  const userExists = users.find((u) => u.username === user.username);

  const handleAddUser = () => {
    if (userExists) {
      toast(1, "Opps", "User is already in your list", "warning");
    } else {
      toast(2, "Added", "User added successfully", "success");
    }

    dispatch(addUser(user));
  };

  const handleRemoveUser = () => {
    dispatch(removeUser(user));
    toast(3, "Removed", "User removed successfully", "info");
  };

  return { handleAddUser, handleRemoveUser, userExists };
};
