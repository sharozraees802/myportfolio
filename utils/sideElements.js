import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/sharozraees802',
        'instagram': 'https://www.instagram.com/muhammadsheroz/',
        'twitter': 'https://twitter.com/sharozkhan802',
        'linkedin': 'https://www.linkedin.com/in/muhammadsheroz/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'sharozkhan802@gmail.com',
        onClick: () => openLink('mailto:sharozkhan802@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements