import express from "express";
import routes from "../routes";
import {
  usersController,
  editProfileController,
  changePasswordController,
  userDetailController
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.home, usersController);
userRouter.get(routes.editProfile, editProfileController);
userRouter.get(routes.changePassword, changePasswordController);
userRouter.get(routes.userDeatil, userDetailController);

export default userRouter;
