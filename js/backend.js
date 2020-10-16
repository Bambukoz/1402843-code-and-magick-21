'use strict';

(function () {
  const URL_GET = `https://21.javascript.pages.academy/code-and-magick/data`;
  const URL_POST = `https://21.javascript.pages.academy/code-and-magick`;

  const TIMEOUT = 5000;
  const Code = {
    SUCCESS: 200,
  };

  const onRequestLoad = (request, onLoad, onError) => {
    const currentStatusCode = request.status;
    switch (currentStatusCode) {
      case Code.SUCCESS:
        if (request.responseURL === URL_GET) {
          onLoad(request.response);
        } else {
          onLoad();
        }
        break;
      default:
        onError(`Возникла ошибка ${currentStatusCode}`);
    }
  };

  const sendRequest = (methodType, onLoad, onError, url, data) => {
    const request = new XMLHttpRequest();
    request.timeout = TIMEOUT;
    if (methodType === `GET`) {
      request.responseType = `json`;
    }

    request.addEventListener(`load`, () => onRequestLoad(request, onLoad, onError));
    request.addEventListener(`error`, () => onError(`Проблемы с соединением`));
    request.addEventListener(`timeout`, () => onError(`Время ожидания ответа от сервера превысило ${TIMEOUT / 1000} секунд`));

    request.open(methodType, url);
    if (data) {
      request.send(data);
    } else {
      request.send();
    }
  };

  const load = (onLoad, onError) => {
    sendRequest(`GET`, onLoad, onError, URL_GET);
  };

  const upload = (data, onLoad, onError) => {
    sendRequest(`POST`, onLoad, onError, URL_POST, data);
  };

  window.backend = {
    load,
    upload
  };
})();
