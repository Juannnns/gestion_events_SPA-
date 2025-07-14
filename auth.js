export const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export const clearUser = () => {
    localStorage.removeItem("user");
};

export const isAuthenticated = () => {
    return !!getUser();
}

export const getRole = () => {
    const user = getUser();
    return user?.role || null;
};