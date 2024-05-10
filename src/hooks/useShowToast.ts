import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

export const useShowToast = () => {
  const toast = useToast();

  const showToast = useCallback(
    (
      id: number,
      title: string,
      description: string,
      status: "error" | "success" | "warning" | "info"
    ) => {
      !toast.isActive(id) &&
        toast({
          id,
          title: title,
          description: description,
          status: status,
          duration: 2300,
          isClosable: true,
        });
    },
    [toast]
  );

  return showToast;
};
