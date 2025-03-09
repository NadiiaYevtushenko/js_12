export async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: "Mocked data response" });
        }, 1000);
    });
}

export async function getUser(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
        throw new Error("User not found");
    }
    return response.json();
}