import anisha from './assets/avatar-anisha.png'
import richard from './assets/avatar-richard.png'
import shanai from './assets/avatar-shanai.png'
import ali from './assets/avatar-ali.png'
import { Ttestimonial } from './components/type'

export const aboutData = [
    {
        id: 1,
        title: "Track company-wide progress",
        desc: `See how your day-to-day tasks fit into the wider vision. Go from 
        tracking progress at the milestone level all the way done to the 
        smallest of details. Never lose sight of the bigger picture again.`
    },
    {
        id: 2,
        title: "Advanced built-in reports",
        desc: `Set internal delivery estimates and track progress toward company 
        goals. Our customisable dashboard helps you build out the reports 
        you need to keep key stakeholders informed.`
    },
    {
        id: 3,
        title: "Everything you need in one place",
        desc: ` Stop jumping from one service to another to communicate, store files, 
        track tasks and share documents. Manage offers an all-in-one team 
        productivity solution.`
    }
]

export const testimonials: Array<Ttestimonial> = [
    {
        id: 1,
        fullname: "Anisha Li",
        desc: `“Manage has supercharged our team’s workflow. The ability to maintain 
        visibility on larger milestones at all times keeps everyone motivated.”`,
        img: anisha
    },
    {
        id: 2,
        fullname: "Ali Bravo",
        desc: `“We have been able to cancel so many other subscriptions since using 
        Manage. There is no more cross-channel confusion and everyone is much 
        more focused.”`,
        img: ali
    },
    {
        id: 3,
        fullname: "Richard Watts",
        desc: ` “Manage allows us to provide structure and process. It keeps us organized 
        and focused. I can’t stop recommending them to everyone I talk to!”`,
        img: richard
    },
    {
        id: 4,
        fullname: "Shanai Gough",
        desc: `“Their software allows us to track, manage and collaborate on our projects 
        from anywhere. It keeps the whole team in-sync without being intrusive.”`,
        img: shanai
    }
]