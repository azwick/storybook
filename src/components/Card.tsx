import './Card.css';

import { Button } from './Button';

type Props = {
    title: string,
    imgUrl: string,
    description: string,
    button?: boolean
}

export const Card = ({title, imgUrl, description, button} : Props) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={imgUrl} className="App-logo" alt="logo" />
            <p>{description}</p>
            {button && <Button type="primary" label='Click me!' />}
        </div>
    )
}