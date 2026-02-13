

const Validate = (schema) => async (req, res, next) => {
    // console.log("Schema received in middleware:", schema);
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "fill the input correctly" ;
const extraDetails = err.issues[0].message;

    const error = {
            status,
            message,
            extraDetails
    };

    console.log(error);
    next(error);

    // return res.status(400).json({
    //   message: err.issues[0].message
    // });
  }
};





module.exports = Validate;  
