'use strict';

(function () {
  window.coatColor = `rgb(101, 137, 164)`;
  window.eyesColor = `black`;
  window.wizardsArray = [];

  const successLoadHandler = (wizards) => {
    window.wizardsArray = wizards;
    updateWizards();
  };

  const getRank = (wizard) => {
    let rank = 0;
    if (wizard.colorCoat === window.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.eyesColor) {
      rank += 1;
    }
    return rank;
  };

  const namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  const updateWizards = () => {
    window.wizardGenerator.createFragment(window.wizardsArray.sort(function (left, right) {
      let rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name - right.name);
      }
      return rankDiff;
    }));
  };

  window.filter = {
    successLoadHandler,
    updateWizards
  };
})();
