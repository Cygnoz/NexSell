
type Props = {
    size?: number;
    color?: string;
}

const EditIcon = ({ size, color }: Props) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.3335 2.0001C11.5033 1.79946 11.7133 1.63614 11.9502 1.52055C12.187 1.40497 12.4456 1.33966 12.7093 1.32878C12.973 1.31789 13.236 1.36169 13.4818 1.45736C13.7275 1.55303 13.9504 1.69848 14.1364 1.88445C14.3223 2.07041 14.4672 2.29281 14.5619 2.53746C14.6565 2.78211 14.6987 3.04366 14.6859 3.30542C14.6731 3.56718 14.6055 3.82342 14.4874 4.05781C14.3694 4.2922 14.2034 4.49959 14.0002 4.66677L5.00016 13.6668L1.3335 14.6668L2.3335 11.0001L11.3335 2.0001Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    )
}

export default EditIcon