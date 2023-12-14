import { useSessionStorage } from "@mantine/hooks";

interface session {
    responses: {
        [key: string]: string | string[]
    },
    state: {
        index: number
    }
}

const useQuizSession = () => {
    const defaultValue = {
        responses: {},
        state: {
            index: 0
        }
    }
    const [session, setSession] = useSessionStorage<session>({
        key: "quiz",
        defaultValue,
    });

    return {
        session,
        setSession,
        saveResponse: (response: string | string[]) => {
            setSession((prev) => {
                return {
                    state: {
                        index: prev.state.index + 1
                    },
                    responses: {
                        ...prev.responses,
                        [(session?.state.index.toString() as any)]: response
                    }

                }
            })





        }
    }
}
export default useQuizSession