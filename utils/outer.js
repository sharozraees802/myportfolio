import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Muhammad Sheroz,',
    decrypTexts: [
        'A Software Engineer',
        'A Full Stack Developer',
        'A Three.js Developer',
        // 'A Traveler',
    ],
    desciption: `A dedicated and disciplined Full Stack engineer who loves to create things for the internet. With more than 2 years of field experience, I've delivered projects to many happy clients worldwide.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:sherozkhan802@gmail.com?subject=Hello')
    }
}

export default outer
