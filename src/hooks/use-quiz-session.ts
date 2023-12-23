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
        clearSession: () => {
            setSession(defaultValue)
        },
        saveResponse: (response: string | string[], isLastQuestion: boolean) => {
            setSession((prev) => {
                console.log(prev)
                return {
                    state: isLastQuestion ? { ...prev.state } : { index: (session as any).state.index + 1 },
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