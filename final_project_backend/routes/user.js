const { getMongoConnection } = require("../mongo");
const { validationResult } = require("express-validator");
const utils = require("./utils");
const { ObjectId } = require("mongodb");

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
 *                    image:
 *                      type: File
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
  const query = { _id: new ObjectId(req._id) };
  const update = {
    $set: { ...req.body, profileImage: req.file ? req.file.filename : null },
  };
  const result = await mongo.collection("Users").updateOne(query, update);
  if (result) {
    return res.sendStatus(200);
  } else {
    return res.sendStatus(400);
  }
};

const getUser = async (req, res) => {
  const mongo = await getMongoConnection();
  const options = {
    projection: {
      _id: 0,
      email: 1,
      names: 1,
      lastNames: 1,
      nickname: 1,
      birthday: 1,
      rol: 1,
      profileImage: 1,
    },
  };
  const user = await mongo
    .collection("Users")
    .findOne({ _id: new ObjectId(req._id) }, options);
  return res.json(user);
};

module.exports = {
  bindNewUser,
  getUser,
};
