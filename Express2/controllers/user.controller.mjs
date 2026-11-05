const status = (request, response) => {
    return response.status(200).send({ message: "Hey, user" });
};

const getUsers = (request, response) => {
    return response.status(200).send({ message: "get users" });
}

export default { status, getUsers };