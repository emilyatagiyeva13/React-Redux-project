import { useEffect } from "react"
import supabase from "./src/utils/supabase"

function Page() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        async function getTodos() {
            const { data: todos } = await supabase.from('todos').select()

            if (todos.length > 1) {
                console.log(setTodos(todos));

            }
        }

        getTodos()
    }, [])
}

export default Page;

