const jwt = require("jsonwebtoken");
const { getMongoConnection } = require("../mongo");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const utils = require("./utils");


/**
 * @swagger
 *    tags:
 *        name: User
 *        description: Endpoints de administración de usuarios, requieren jwt
 * /user/bind-new-user:
 *    post:
 *        tags: [User]
 *        description: Ingreso de usuario, genera un token si el usuario existe
 *        requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    name:
 *                      type: string
 *                    lastName:
 *                      type: string
 *                    nickname:
 *                      type: string
 *                    birthday:
 *                      type: string
 *        responses:
 *          200:
 *            description: Información aceptada
 *          400:
 *            description: Bad request
 */
const bindNewUser = async (req, res) => {
  const errs = validationResult(req);
  if (!errs.isEmpty()) {
    return res.send({ errors: errs.array() });
  }

  const mongo = await getMongoConnection();
  const { email, password } = req.body;
  const users = await mongo.collection("Users").find({ email }).toArray();
  for (const user of users) {
    if (bcrypt.compareSync(password, user.password)) {
      const token = GenerateToken(user._id);
      return res.json({ token });
    }
  }
  return res.sendStatus(401);
};

module.exports = {
  bindNewUser,
};
