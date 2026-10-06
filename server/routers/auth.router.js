import { Router } from "express";
import authCrtls from "../ctrls/auth.ctrls.js";
import { validate } from "../utils/schemaValidate.js";
import { authMiddleware } from "../utils/authMiddleware.js";
import { loginuserSchema, userSchema } from "../schemases/AuthSchema.js";


const router = Router()


router.get("",authMiddleware, authCrtls.users)
router.get("/me",authMiddleware, authCrtls.me)
router.post("/registe", authMiddleware, validate(userSchema), authCrtls.register)
router.post("/login",validate(loginuserSchema), authCrtls.login)
router.delete("/users/:id", authMiddleware, authCrtls.deleteUser)

export default router