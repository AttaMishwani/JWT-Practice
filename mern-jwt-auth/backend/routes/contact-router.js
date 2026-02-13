const express = require("express");
const contactForm = require("../controllers/contact-controller");
const Validate = require("../middlewares/validate-middleware")
const contactSchema = require("../validators/Contact-validator");
const router  = express.Router();


router.post("/contact" , Validate(contactSchema), contactForm);

module.exports = router;