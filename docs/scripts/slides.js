import {SfeirThemeInitializer} from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return ['00-conf/01-speaker.md'];
}

function controllerSlides() {
  return [
    '01-controller/00-TITLE.md',
    '01-controller/01-Intro-et-rappel.md',
    '01-controller/02-anatomie-controller.md',
    '01-controller/03-routes.md',
    '01-controller/04-filtres.md',
    '01-controller/05-transition.md',
    '01-controller/06-questions.md',
  ];
}

function viewslides() {
  return [
    '02-view/00-TITLE.md',
    '02-view/01-intro.md',
    '02-view/02-layouts-et-style.md',
    '02-view/03-communication-controller.md',
    '02-view/04-Helper.md',
  ];
}
function modelSlides() {
  return [
    '03-Model/00-TITLE.md',
    '03-Model/01-model-vs-dto.md',
    '03-Model/02-mapping.md'
  ];
}


function formation() {
  return [
    //
    ...schoolSlides(), //
    ...controllerSlides(), //
    ...viewslides(), //
    ...modelSlides(), //
  ].map((slidePath) => {
    return {path: slidePath};
  });
}

SfeirThemeInitializer.init(formation);
