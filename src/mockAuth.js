export const getUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
};

export const registerUser = (userData) => {
    const users = getUsers();

    const exists = users.find((u) => u.email === userData.email);
    if (exists) {
        return { success: false, message: "emailAlreadyExists" };
    }

    const newUser = {
        id: Date.now(),
        fullName: userData.fullName,
        email: userData.email,
        password: userData.password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true };
};

export const loginUser = (email, password) => {
    const users = getUsers();

    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        return { success: true, user };
    }

    return { success: false, message: "invalidEmailOrPassword" };
};


export const getCurrentUser = () => {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
};

export const logoutUser = () => {
    localStorage.removeItem("currentUser");
};