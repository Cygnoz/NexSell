
type Props = {
    color?: string;
    width?: number;
    height?:number;
  };
const PlusIcon = ({ color, width, height }:Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.83337 5.99967H11.1667M6.50004 1.33301V10.6663"
        stroke={color ? color : "#F7E7CE"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PlusIcon
