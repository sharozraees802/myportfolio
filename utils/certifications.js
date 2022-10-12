import { openLink } from "./methods"

const certifications = {
    heading:  `Licenses & certifications`,
    list: [
        {
            size: 1,
            title: 'JavaScript (Intermediate)',
            platform: 'HackerRank',
            link: 'https://www.hackerrank.com/skills-verification/javascript_intermediate',
            date: 'Issued Oct 2022 · No Expiration Date',
            logo: '/assets/HackerRank_logo.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'React(Basic)',
            platform: 'HackerRank',
            link: 'https://www.hackerrank.com/skills-verification/react_basic',
            date: 'Issued Oct 2022 · No Expiration Date',
            logo: '/assets/HackerRank_logo.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'Kubernetes Essentials',
            platform: '10Pearls University',
            link: 'https://10pearlsuniversity.org/courses/kubernetes-essentials/',
            date: 'Issued Aug 2022 · No Expiration Date',
            logo: '/assets/10pearlsuniversity.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Automation Using Cypress – Part II',
            platform: '10Pearls University',
            link: 'https://10pearlsuniversity.org/courses/automation-using-cypress-part-2/',
            date: 'Issued JUl 2022 · No Expiration DateIssued',
            logo: '/assets/10pearlsuniversity.png',
            aos: 'zoom-out-right'
        },
        {
            size: 2,
            title: 'Test Automation With Cypress',
            platform: '10Pearls University',
            link: 'https://10pearlsuniversity.org/courses/test-automation-with-cypress/',
            date: 'Issued Feb 2022 · No Expiration Date',
            logo: '/assets/10pearlsuniversity.png',
            aos: 'zoom-out-left'
        },
        {
            size: 2,
            title: 'MERN STACK MASTER',
            platform: 'Udemey',
            link: 'https://www.udemy.com/share/102Rwq3@uh2VempDVML8Xaj78F9aAWcAazn8VjdYL-q3gd7fkynFL9V2uk_MFSqoOm28pmYDgQ==/',
            date: 'Issued Sep 2002 · No Expiration Date',
            logo: '/assets/Udemy2.png',
            aos: 'zoom-out-left'
        },
    ],
    handleIconClick: openLink
}

export default certifications