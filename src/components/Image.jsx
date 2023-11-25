export default function Image({ url, title, name }) {
    return (
        <img
            src={url ? `${import.meta.env.VITE_REACT_BASEIMGURL}/${url}` : '../assets/imgNotFound.webp'}
            alt={title ? title : name}
            title={title ? title : name}
        />
    )
}