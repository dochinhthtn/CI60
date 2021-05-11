import InputWrapper from "./components/InputWrapper.js";
import RegisterForm from "./components/RegisterForm.js";
import LoginForm from "./components/LoginForm.js";
import AppStat from "./components/AppStat.js";
import UserActions from "./components/UserActions.js";

import { authStateChanged } from "./models/user.js";

authStateChanged();