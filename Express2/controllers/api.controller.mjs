const status = (request, response) => {
    return response.status(200).send({ message: "Hey, api" });
};

export default { status };