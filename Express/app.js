import express from "express";

const app = express();
app.use(express.json()); // Middleware

// products listing api.

// GET -> /products -> list of products
// POST -> /products -> create product (use body)
// DELETE -> /products/{id} -> delete product
// PATCH -> /products/{id} -> update product (use body)
// GET -> /products/{id} -> get single product

// app.get("/{:id}", (request, response) => {
//     const query = request.query;
//     const params = request.params;
//     response.status(200).send({...params, ...query});
// });

// app.post("/check-post", (request, response) => {
//     const body = request.body;
//     response.status(200).send(body); 
// });

// products

let products = [];

app.post("/products", (request, response) => {
    const product = request.body;
    const uid = crypto.randomUUID();
    console.log(uid)
    products.unshift({...product, id: uid});
    return response.status(201).send({ message: "Product created successfully", new_product: product});
});

app.get("/products{/:id}", (request, response) => {
    const id = request.params?.id;
    if (id) {
        const prod = products.find(p => p.id === id);
        return response.status(200).send(prod);
    }
    return response.status(200).send(products);
});

app.patch("/products{/:id}", (request, response) => {
    const id = request.params?.id;
    if (!id) {
        return response.status(400).send({ message: "Product id is required"});
    }
    const indexOfProduct = products.findIndex(p => p.id === id);
    if (indexOfProduct === -1) {
        return response.status(404).send({ message: "Product not found"});
    }
    const new_data = request.body;
    const currentProductInfo = products[indexOfProduct];
    products[indexOfProduct] = { ...currentProductInfo, ...new_data };
    return response.status(200).send({
        message: "Product updated successfully",
        updated_product: products[indexOfProduct]
    });
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

