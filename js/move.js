'use strict';

(function () {
  const setup = document.querySelector(`.setup`);
  const upload = setup.querySelector(`.upload`);

  upload.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let dragged = false;

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();

      dragged = true;

      let shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + `px`;
      setup.style.left = (setup.offsetLeft - shift.x) + `px`;
    };

    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);

      const onUploadClick = (clickEvt) => {
        clickEvt.preventDefault();
        upload.removeEventListener(`click`, onUploadClick);
      };

      if (dragged) {
        upload.addEventListener(`click`, onUploadClick);
      }
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });
})();
