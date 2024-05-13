// import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useParams } from 'react-router-dom';

const DynamicTitle = () => {
    const location = useLocation();
    const {id} =useParams();

    const DTitle = () => {
        switch (location.pathname) {
            case '/':
                return 'Homee - HelpNexus';
            case '/allNeedVolunteer':
                return 'All Need Volunteer - HelpNexus';
            case '/manageMyPost':
                return 'Manage My Post - HelpNexus';

            case '/needVolunteer':
                return 'Add for volunteer - HelpNexus';

            case '/login':
            return 'login - HelpNexus';

            case '/register':
            return 'Register - HelpNexus';

            // case '/details/${id}':
            // return 'Register - HelpNexus';




            // Add more routes as needed
            default:
                return 'HelpNexus';
        }
    };



    return (
        <Helmet>
            <title>{DTitle()}</title>
        </Helmet>
    );
};

export default DynamicTitle;