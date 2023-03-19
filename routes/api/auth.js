const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/user');
const {
  register,
  login,
  getCurrent,
  logout,
  subscription,
  updateAvatar,
  verify,
  resendEmail,
} = require('../../controller/auth');
const upload = require('../../middlewares/upload');

const router = express.Router();

// signup
router.post('/register', validateBody(schemas.registerSchema), ctrlWrapper(register));

router.get('/verify/:verificationToken', ctrlWrapper(verify));

router.post('/verify', validateBody(schemas.verifyEmailSchema), ctrlWrapper(resendEmail));

// signin
router.post('/login', validateBody(schemas.loginSchema), ctrlWrapper(login));

router.get('/current', authenticate, ctrlWrapper(getCurrent));

router.get('/logout', authenticate, ctrlWrapper(logout));

router.patch(
  '/:id/subscription',
  authenticate,
  validateBody(schemas.subscriptionSchema),
  ctrlWrapper(subscription)
);

router.patch('/avatars', authenticate, upload.single('avatar'), ctrlWrapper(updateAvatar));

module.exports = router;
