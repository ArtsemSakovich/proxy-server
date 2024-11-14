import Joi from "joi";

const roverImageSchema = Joi.object({
    apiKey: Joi.string().required().messages({
        'string.empty': 'API key is empty',
        'any.required': 'API key is required'
    })
});

const meteorsSchema = Joi.object({
    start_date: Joi.date().optional().messages({
        'start_date.base': 'Incorrect date format'
    }),
    end_date: Joi.date().optional().messages({
        'end_date.base': 'Incorrect date format'
    }),
    count: Joi.boolean().optional().messages({
        'count.base': 'Incorrect count format'
    }),
    were_dangerous_meteors: Joi.boolean().optional().messages({
        'were_dangerous_meteors.base': 'Incorrect were_dangerous_meteors format'
    })
});

const validateIncomingGetRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.query);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        next();
    };
};

const validateIncomingPostRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        next();
    };
};
export { roverImageSchema, meteorsSchema, validateIncomingGetRequest, validateIncomingPostRequest };