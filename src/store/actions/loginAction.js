export function login (user){
    return {
        type: 'login',
        user
    }
} 
export function logout (user){
    return {
        type: 'logout',
        user
    }
} 