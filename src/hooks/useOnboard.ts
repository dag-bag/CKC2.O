import { useLocalStorage } from "@mantine/hooks"

interface onboard {
    firstname: null | string,
    lastname: null | string,
    country: null | string,
    state: null | string,
    phone: null | string,
    grade: null | string,
    city: null | string,
    dob: null | string,
    avatar: null | string
}

const useOnboard = () => {
    const storageProperties = {
        key: "onboard",
        defaultValue: {
            firstname: null,
            lastname: null,
            country: null,
            state: null,
            avatar: null,
            phone: null,
            grade: null,
            city: null,
            dob: null,
        }
    }
    const [storage, setStorage] = useLocalStorage<onboard>(storageProperties)
    return {
        storage,
        getter: (key: keyof onboard) => (storage as onboard)[key] as string,
        setter: (key: keyof onboard, value: string) => setStorage({ ...storage, [key]: value } as onboard),
    }
}

export default useOnboard