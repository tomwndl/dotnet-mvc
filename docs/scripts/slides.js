import {SfeirThemeInitializer} from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return ['00-conf/01-speaker.md'];
}

function controllerSlides() {
  return [
    '01-controller/00-TITLE.md',
    '01-controller//01-Intro-et-rappel.md',
    '01-controller//02-anatomie-controller.md',
    '01-controller//03-routes.md',
    '01-controller//04-filtres.md',
    '01-controller//05-project.md',
    '01-controller//06-command.md'
  ];
}

function awsSlides() {
  return ['03-aws/00-TITLE.md', '03-aws/01-aws.md'];
}

function gcpSlides() {
  return ['02-gcp/00-TITLE.md', '02-gcp/02-gcp.md'];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...controllerSlides(), //
    ...gcpSlides(), //
    ...awsSlides(), //
  ].map((slidePath) => {
    return {path: slidePath};
  });
}

SfeirThemeInitializer.init(formation);
