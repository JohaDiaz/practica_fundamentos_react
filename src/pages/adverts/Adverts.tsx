import type { Advert } from "./types";

interface Props {
    advert : Advert;
}

const Advert = ({ advert }: Props) => {
    const { name, sale, price, tags } = advert;
    return (
        <article>
            <div>
                <div>{name}</div>
                <div>{sale}</div>
                <div>{price}</div>
                <div>{tags}</div>
            </div>
        </article>
    )};

export default Advert;