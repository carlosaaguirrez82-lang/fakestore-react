import { useQuery  } from "@tanstack/react-query";
import { userApi } from "../../infrastructure/api/userApi";

export function useUsers () {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => userApi.getAll(),
    })
}