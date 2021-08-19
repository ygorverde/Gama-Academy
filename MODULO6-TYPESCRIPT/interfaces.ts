interface User {
    name: string;
    email: string;
    address?: string;
}

function getUser(): User {
    return {
        name: 'Ygor',
        email: 'ygor@'
    }
}

function setUser(usuario: User) {
    //...
}
