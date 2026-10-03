export default function Socials(social) {
    const Icon = social.icon
    return(
        <a href={social.link} title={social.title}><Icon /></a>
    )
}