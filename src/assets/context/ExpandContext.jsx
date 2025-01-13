import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ExpandContext = createContext({
  isExpand: null,
  toggleExpand: () => {},
});

export const ExpandProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(null);
  const toggleExpand = (containerId) => {
    setIsExpanded((prev) => (prev === containerId ? null : containerId));
  };

  return (
    <ExpandContext.Provider value={{ isExpanded, setIsExpanded, toggleExpand }}>
      {children}
    </ExpandContext.Provider>
  );
};
ExpandProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useExpand = () => {
  //+
  return useContext(ExpandContext); //+
};
