'use strict';

const FileTypes = {
  PNG: `image/png`,
  JPG: `image/jpg`,
  JPEG: `image/jpeg`
};
const upload = document.querySelector(`.upload`);
const fileChooser = upload.querySelector(`input[type=file]`);
const userPic = upload.querySelector(`.setup-user-pic`);

const onUserPicChange = () => {
  const file = fileChooser.files[0];
  switch (file.type) {
    case FileTypes.PNG:
    case FileTypes.JPG:
    case FileTypes.JPEG:
      const reader = new FileReader();
      reader.addEventListener(`load`, () => {
        userPic.src = reader.result;
      });
      reader.readAsDataURL(file);
  }
};

fileChooser.addEventListener(`change`, onUserPicChange);


