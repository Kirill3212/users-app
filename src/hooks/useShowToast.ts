import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

export const useShowToast = () => {
  const toast = useToast();

  const showToast = useCallback(
    (
      title: string,
      description: string,
      status: "error" | "success" | "warning" | "info"
    ) => {
      toast({
        title: title,
        description: description,
        status: status,
        duration: 1200,
        isClosable: true,
      });
    },
    [toast]
  );

  return showToast;
};
