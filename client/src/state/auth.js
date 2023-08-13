export const SETUSER = (id,token) => {
    localStorage.setItem("id",id)
    localStorage.setItem("token",token)
}
export const GETUSER = () => {
    return localStorage.getItem("id");
}
