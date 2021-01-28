import CircularProgress from "@material-ui/core/CircularProgress";
import * as React from "react";
import { CSSProperties } from "react";
import styled from "styled-components";

interface LoaderProps {
	loading: boolean;
	opacity?: number;
	inline?: boolean;
}

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
`;

const Loader: React.FC<LoaderProps> = ({ loading, opacity, inline = false }) => {
  if (!loading) return null;
  
  const style = {
    background: opacity ? `rgba(255, 255, 255, ${opacity})` : undefined,
    minHeight: inline ? "10rem" : undefined,
    minWidth: inline ? "10rem" : undefined,
    position: inline ? "relative" : undefined,
  } as CSSProperties;

  return (
    <Root style={style}>
      <CircularProgress />
    </Root>
  );
};

export default Loader;
