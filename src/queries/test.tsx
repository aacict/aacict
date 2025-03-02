
export const getUsers = async () => {
    const res = await fetch('https://reqres.in/api/users?page=2')
    return res.json()
}