import {SfeirThemeInitializer} from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return ['00-conf/00-TITLE.md', '00-conf/01-speaker-genez-t.md'];
}

function introSlides() {
  return [
    '01-intro/00-TITLE.md',
    '01-intro/01-terraform.md',
    '01-intro/02-a-quoi-sert-terraform.md',
    '01-intro/03-HCL.md',
    '01-intro/04-state.md',
    '01-intro/05-project.md',
    '01-intro/06-command.md'
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
    ...introSlides(), //
    ...gcpSlides(), //
    ...awsSlides(), //
  ].map((slidePath) => {
    return {path: slidePath};
  });
}

SfeirThemeInitializer.init(formation);
