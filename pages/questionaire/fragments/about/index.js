import {form} from '../form/index.js';
import {questionaireFormStepper, questionaireStepper} from '../steps/index.js';
import {boolText, formFields, questionaireFormSteps} from '../../constants/index.js';

const aboutFormFragment = form.getFragment('.form-container.about', {
    [formFields.ATTEND_DEV_TALKS]: (value) => {
        if (!value) {
            return {
                message: 'Information is required'
            };
        }
    },
    [formFields.DEV_TALK_TOPIC]: (value) => {
        if (aboutFormFragment.getInput(formFields.ATTEND_DEV_TALKS).getValue() !== boolText.TRUE) return;

        if (!value) {
            return {
                message: 'Information is required'
            };
        }
    },
    [formFields.SOMETHING_SPECIAL]: (value) => {
        if (!value) {
            return {
                message: 'Information is required'
            };
        }
    }
});
aboutFormFragment.registerFormEvents();

const onFormSubmit = () => {
    const isValid = aboutFormFragment.validateForm();

    if (!isValid) return;

    questionaireStepper.moveToNextStep();
};


questionaireFormStepper.onActivateStepHooks.push(() => {
    if (questionaireFormStepper.activeStep === questionaireFormSteps.ABOUT) {
        questionaireFormStepper.nextBtn.addEventListener('click', onFormSubmit);
    } else {
        questionaireFormStepper.nextBtn.removeEventListener('click', onFormSubmit);
    }
});