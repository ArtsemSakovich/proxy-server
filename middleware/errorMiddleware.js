function errorHandler(err, req, res) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
}

export default errorHandler;