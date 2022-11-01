import { writable } from 'svelte/store'

export const isLoggedIn = writable(false)

const createUser = () => {

    const myUser = writable(
        {
            id: "",
            password: "",
        }
    );


    const { subscribe, set } = myUser;

    return {
        subscribe,
        setUser: (myUser) => {
            set(myUser)
        },
        reset : () => set(null)
    }
}

export const user = createUser()