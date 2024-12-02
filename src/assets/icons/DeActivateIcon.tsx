

type Props = {
    size?:number;
    color?:string;
}

const DeActivateIcon =  ({ size, color }: Props) => {
  return (
    <div>
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="30.9998" height="31" rx="15.4999" fill="#DF8F89" fill-opacity="0.25"/>
<rect x="0.5" y="0.5" width="30.9998" height="31" rx="15.4999" stroke={color}/>
<path d="M19.0649 23.391C21.9618 22.1879 23.9998 19.3316 23.9998 16C23.9998 12.6683 21.9618 9.81199 19.0649 8.60893V9.83216C21.3297 10.9601 22.8865 13.2984 22.8865 16C22.8865 17.701 22.2693 19.258 21.2466 20.4596L19.0648 18.2778V19.8522L20.4594 21.2468C20.0357 21.6073 19.5677 21.9174 19.0648 22.168V23.391H19.0649ZM19.0649 8.60893V9.83216C18.1417 9.37227 17.101 9.11329 15.9999 9.11329C15.4203 9.11329 14.8574 9.18509 14.3195 9.31993V8.17749C14.8613 8.06157 15.4234 8 15.9999 8C17.0856 8 18.1207 8.21693 19.0649 8.60893ZM19.0649 18.2778L14.3195 13.5325V15.1068L19.0649 19.8522V18.2778ZM19.0649 22.168V23.391C18.1207 23.7831 17.0856 24 15.9999 24C15.4234 24 14.8614 23.9384 14.3195 23.8225V22.6797C14.8574 22.8146 15.4203 22.8867 15.9999 22.8867C17.1011 22.8867 18.1419 22.6278 19.0649 22.168ZM14.3195 8.17749V9.31993C13.6399 9.4905 13.0002 9.7622 12.4176 10.118V8.84579C13.013 8.54706 13.6508 8.32043 14.3195 8.17749ZM14.3195 13.5325V15.1068L12.4176 13.2049V11.6306L14.3195 13.5325ZM14.3195 22.6797V23.8225C13.6507 23.6794 13.0129 23.4528 12.4176 23.154V21.8822C13.0002 22.238 13.6399 22.5092 14.3195 22.6797ZM12.4176 8.84579V10.118C12.1598 10.2754 11.913 10.4494 11.6791 10.6383V9.2667C11.9167 9.11376 12.1634 8.97336 12.4176 8.84579ZM12.4176 11.6306V13.2049L11.6791 12.4663V10.8919L12.4176 11.6306ZM12.4176 21.8823V23.1541C12.1634 23.0266 11.9167 22.8862 11.6791 22.7332V21.3617C11.9132 21.5507 12.1596 21.7249 12.4176 21.8823ZM11.6791 9.2667V10.6383C11.6323 10.6761 11.586 10.7142 11.5402 10.7531L11.6791 10.8919V12.4663L11.0176 11.8048V9.74162C11.2296 9.57265 11.4501 9.41385 11.6791 9.2667ZM11.6791 21.3617V22.7331C11.4501 22.586 11.2296 22.4272 11.0176 22.2584V20.7537C11.2244 20.9703 11.4456 21.1734 11.6791 21.3617ZM11.0176 9.74162V11.8048L10.753 11.5403C9.73061 12.742 9.11317 14.299 9.11317 16C9.11317 17.8433 9.83784 19.5176 11.0176 20.7537V22.2584C9.17876 20.7924 8 18.5337 8 16C8 13.4662 9.17876 11.2074 11.0176 9.74162Z" fill="#FF6A5E"/>
</svg>

    </div>
  )
}

export default DeActivateIcon