import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'


interface UserActions {

}

interface UserState {

}


export const UseUserStore = create<UserActions & UserState>()(immer(set => ({

})))
