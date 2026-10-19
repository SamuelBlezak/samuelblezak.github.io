export default function Socials(prop) {

    const Icon = prop.icon

    return(
        <a href={prop.link} title={prop.title} target="_blank" rel="noopener noreferrer"><Icon /></a>
    )
}