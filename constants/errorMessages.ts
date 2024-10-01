const errorMessages = {
    500: {
        title: 'Error While Submitting Quiz',
        message: 'Contact Co-ordinators',
    },
    400: {
        title: 'Quiz Already Submitted',
        message: '',
        actions: [
            {
                text: 'Ok',
                navigateTo: 'Home',
            },
        ],
    },
    404: {
        title: 'Quiz Ended',
        message: '',
        actions: [
            {
                text: 'Ok',
                navigateTo: 'Home',
            },
        ],
    },
    default: {
        title: 'Error Due to bad internet connection',
        message: '',
    },
};

export const getErrorMessage = (statusCode) => {
    return errorMessages[statusCode] || errorMessages.default;
};
