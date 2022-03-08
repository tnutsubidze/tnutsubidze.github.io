import {formFields} from '../constants';

export const mapFormValuesToApiInput = (values) => {
    const workPreference = {
        'home': 'from_home',
        'office': 'from_office',
        'hybrid': 'hybrid'
    };
    const data = {
        first_name: values[formFields.FIRST_NAME],
        last_name: values[formFields.LAST_NAME],
        email: values[formFields.EMAIL],
        skills: values.selectedSkills.map((selectedSkill) => {
            return {
                id: selectedSkill.id,
                experience: selectedSkill.experience
            };
        }),
        work_preference: workPreference[values[formFields.WORK_PREFERENCE]],
        had_covid: values[formFields.HAD_COVID] === 'yes',
        vaccinated: values[formFields.VACCINATED] === 'yes',
        will_organize_devtalk: values[formFields.ATTEND_DEV_TALKS] === 'yes',
        something_special: values[formFields.SOMETHING_SPECIAL]
    };

    if (values[formFields.PHONE]) {
        data.phone = '+9955' + values[formFields.PHONE];
    }

    if (data.had_covid) {
        data.had_covid_at = values[formFields.COVID_DATE];
    }

    if (data.vaccinated) {
        data.vaccinated_at = values[formFields.VACCINE_DATE];
    }

    if (data.will_organize_devtalk) {
        data.devtalk_topic = values[formFields.DEV_TALK_TOPIC];
    }

    return data;
};