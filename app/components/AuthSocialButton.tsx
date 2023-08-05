import { IconType } from "react-icons";
interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      className="inline-flex w-full justify-center rounded-md bg-white border text-2xl px-4 py-3 text-gray-500 shadow-sm hover:bg-gray-100"
      type="button"
      onClick={onClick}
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
