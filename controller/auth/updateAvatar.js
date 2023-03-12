const fs = require('fs/promises');
const path = require('path');
const Jimp = require('jimp');
const { User } = require('../../models/user');

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars');

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;
  const extention = originalname.split('.').pop();
  const fileName = `${_id}.${extention}`;
  const resultUpload = path.join(avatarsDir, fileName);

  Jimp.read(tempUpload)
    .then(image => image.resize(250, 250).write(resultUpload))
    .catch(error => console.log(error));

  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join('public', 'avatars', fileName);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
};

module.exports = updateAvatar;
