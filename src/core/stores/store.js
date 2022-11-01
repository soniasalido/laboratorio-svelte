import { writable } from "svelte/store";

export const isLoggedIn = writable(false)

export const user = writable([] );

// Custom store0.
const createOrganization = () => {
    const organization = writable('lemoncode');
    const { subscribe, set, update } = organization;
    return {
        subscribe,
        set,
        update,
        reset : () => set('lemoncode')
    }
}

export const organization = createOrganization();


