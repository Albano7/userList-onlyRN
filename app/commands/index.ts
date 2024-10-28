import { getUsersListApi } from "@app/api"
import { setUsersList } from "@app/features/users/usersSlice";
import { store } from "@app/store";

export const getApiUsersList = async () => {
    console.log("getApiUsersList start")
    const listPlayApi: ApiResponseGetUsersProps = await getUsersListApi()
    const dispatch = store.dispatch
    const userListLength = listPlayApi.data?.length
    if(userListLength && listPlayApi.data){
        const newUsersList = listPlayApi.data?.map((value, key) => ({...value, id: key+1+userListLength}))
        return dispatch(setUsersList({ usersList: listPlayApi.data.concat(newUsersList), isError: false }))
    }
    return dispatch(setUsersList({ usersList: [], isError: true }))
}