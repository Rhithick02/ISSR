import LandingPage from '../components/LandingPage'
import StartJourney from '../components/conductor/StartJourney'

export const publicRoutes = [
    {
        url: '/',
        component:LandingPage,
        name: "homepage"
    },
    {
        url: '/conductor',
        component:StartJourney,
        name: "startJourney"
    }
];