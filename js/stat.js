'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const BAR_GAP = 50;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;
const FONT_HEIGHT = 20;

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = (arr) => {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

const getRandomColor = () => `hsl(240, ` + Math.floor(Math.random() * 100) + `%, 50%)`;

window.renderStatistics = (ctx, names, times) => {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.3)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  const maxTime = getMaxElement(times);

  ctx.fillText(
      `Ура вы победили!`,
      CLOUD_X + GAP * 2,
      CLOUD_Y + GAP + FONT_HEIGHT
  );
  ctx.fillText(
      `Список результатов`,
      CLOUD_X + GAP * 2,
      CLOUD_Y + GAP + FONT_HEIGHT * 2
  );

  for (let i = 0; i < names.length; i++) {

    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - GAP * 2 - FONT_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime)
    );
    ctx.fillStyle = (names[i] === `Вы`) ? `rgba(255, 0, 0, 1)` : getRandomColor();
    ctx.fillRect(
        CLOUD_X + (BAR_GAP * i) + GAP * 4 + (BAR_WIDTH * i),
        CLOUD_HEIGHT - GAP - FONT_HEIGHT,
        BAR_WIDTH,
        -((BAR_HEIGHT * times[i]) / maxTime)
    );
    ctx.fillStyle = `#000`;
    ctx.fillText(
        names[i],
        CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - GAP
    );
  }
};
