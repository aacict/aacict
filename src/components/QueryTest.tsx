import { useQuery, } from '@tanstack/react-query'
import { getUsers } from '../queries/test';



function QueryTest() {
    const query = useQuery({ queryKey: ['test'], queryFn: getUsers })
    console.log(query)
    if (query.isLoading) return <p>Loading...</p>
    const users = query.data.data
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {JSON.stringify(users)}
        </div>
    );
}

export default QueryTest;
