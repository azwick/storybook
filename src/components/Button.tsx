import './Button.css';

type Props = {
    type: 'primary' | 'secondary' | 'default'
    label: string
}

export const Button = ({ type, label }: Props) => {
    return (
        <button onClick={() => console.log('Clicked')} className={`button button-${[type]}`}>{label}</button>
    )
}