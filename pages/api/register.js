import dbConnect from "../../lib/dbConnect";
import User from "../../model/User";
import bcrypt from "bcrypt";

const validateEmail = (email) => {
  const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regExp.test(email);
};
const validatePassword = (password, confirmPassword) => {
  return password.length >= 5 && password === confirmPassword;
};
const validateForm = async (email, password, confirmPassword) => {
  if (!validateEmail(email)) {
    return { error: "L'e-mail est invalid" };
  }
  if (!validatePassword(password, confirmPassword)) {
    return {
      error:
        "Le mot de pass est invalid. verifier qu'il plus de 5 caracteres et qu'il est egale au mot de passe confirmE.",
    };
  }

  await dbConnect();
  const userByEmail = await User.findOne({ email: email });

  if (userByEmail) {
    return {
      error: "ChangE d'e-mail svp, il y a deja un utilisateur avec cet'e-mail.",
    };
  }
  return null;
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(400)
      .json({ error: "This API call only accepts POST method." });
  }
  const data = req.body;
  const { email, password, confirmPassword, dob } = data;
  const validateFormRes = await validateForm(email, password, confirmPassword);
  if (validateFormRes) {
    return res.status(400).json(validateFormRes);
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const goodData = {
    ...data,
    dob: new Date(dob),
    password: hashedPassword,
  };
  const newUser = new User(goodData);

  newUser
    .save()
    .then(() => {
      res.status(200).json({ msg: "Inscription reussie." });
    })
    .catsh((err) =>
      res.status(500).json({ error: "Error on '/api/register' : " + err })
    );
}
