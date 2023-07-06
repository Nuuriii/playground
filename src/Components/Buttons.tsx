interface ButtonsProps {
   text: string;
   onClick: () => void;
   className: string;
}

export const Buttons: React.FC<ButtonsProps> = ({
   text,
   onClick,
   className,
}) => {
   return (
      <button onClick={onClick} className={className}>
         {text}
      </button>
   );
};
