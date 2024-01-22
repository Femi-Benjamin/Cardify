import PropTypes from "prop-types";

export const CustomButton = ({ width, content, onClick, backgroundColor, textColor }) => {
  return (
    <button
      style={{ width: width, backgroundColor: backgroundColor, color: textColor }}
      className="p-2 rounded-md text-[#333333] text-center capitalize text-base cursor-pointer"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

CustomButton.propTypes = {
  width: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string.isRequired,
};

