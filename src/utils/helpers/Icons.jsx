/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

export const Icons = ({ name, ...rest }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const importIcon = async () => {
    try {
      ImportedIconRef.current = (await import(`../../Assets/images/icons/${name}.svg`)).ReactComponent;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    importIcon();
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...rest} />;
  }

  return null;
};
Icons.propTypes = {
  name: PropTypes.string.isRequired,
};
