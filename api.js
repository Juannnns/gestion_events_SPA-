const API_URL = "http://localhost:3000/";

export const fetchData = async (endpoint) => {
    const res = await fetch(`${API_URL}/${endpoint}`);
    return res.json();
}

export const postData = async (endpoint, data) => {
    const res = await fetch(`${API_URL}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const updateData = async (endpoint, id, data) => {
    const rest = await fetch(`${API_URL}/${endpoint}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(data),
    });
};

export const deleteData = async (endpoint, id) => {
    await fetch(`${API_URL}/${endpoint}/${id}`, {
        method: "DELETE",
    });
};