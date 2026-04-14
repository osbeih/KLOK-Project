// جلب كل المستخدمين المسجلين
export const getUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
};

// تسجيل مستخدم جديد
export const registerUser = (userData) => {
    const users = getUsers();

    // تحقق إذا الإيميل مسجل مسبقاً
    const exists = users.find((u) => u.email === userData.email);
    if (exists) {
        return { success: false, message: "Email already exists" };
    }

    // أضف المستخدم الجديد
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

// تسجيل الدخول
export const loginUser = (email, password) => {
    const users = getUsers();

    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if (user) {
        // خزّن المستخدم الحالي في session
        localStorage.setItem("currentUser", JSON.stringify(user));
        return { success: true, user };
    }

    return { success: false, message: "Invalid email or password" };
};

// تسجيل الخروج
export const logoutUser = () => {
    localStorage.removeItem("currentUser");
};

// جلب المستخدم الحالي
export const getCurrentUser = () => {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
};