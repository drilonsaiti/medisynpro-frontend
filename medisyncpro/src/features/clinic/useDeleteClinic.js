import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {deleteClinic} from "../../services/apiClinics.js";

export function useDeleteClinic() {

    const queryClient = useQueryClient();

    const {isPending: isDeleting, mutate: deleteMutate} = useMutation({
        mutationFn: deleteClinic,
        onSuccess: () => {
            toast.success("clinic successfully deleted")
            queryClient.invalidateQueries({
                queryKey: ['clinics'],
            })
        },
        onError: (error) => toast.error(error.message)
    })

    return {isDeleting, deleteMutate}
}