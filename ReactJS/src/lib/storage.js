const storageKey = "user_data";

const getLocalData = () => {
    const data = localStorage.getItem(storageKey);
    const parsedData = data ? JSON.parse(data) : [];
    return parsedData;
}

export const localLogin = (username, password) => {
    const data = getLocalData();
    const user = data.find(user => user.username == username);
    if (!user) {
        return { ok: false, error: "User not found", field: "username" };
    }
    if (user.password != password) {
        return { ok: false, error: "Invalid password", field: "password" };
    }
    return { ok: true, email: user.email };
}

export const setLocalData = (userData) => {
    const data = getLocalData();
    const isUsernameExist = data.find(user => user.username == userData.username);
    if (isUsernameExist) {
        return { ok: false, error: "Username already exists", field: "username" };
    }
    const isEmailExist = data.find(user => user.email == userData.email);
    if (isEmailExist) {
        return { ok: false, error: "Email already exists", field: "email" };
    }
    const isPhoneExist = data.find(user => user.phone == userData.phone);
    if (isPhoneExist) {
        return { ok: false, error: "Phone already exists", field: "phone" };
    }
    data.push(userData);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(storageKey, jsonData);
    return { ok: true };
}

