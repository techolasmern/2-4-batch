export const getProducts = async () => {
    const response = await fetch("https://dummyjsdon.com/products");
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
};