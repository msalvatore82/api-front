import styled from 'styled-components';

const Loading = styled.div`
  height: 100px;

  & > svg {
    width: 100%;
    height: 100%;
  }

  & path {
    fill: rgb(169 165 138);
    animation: pulse 5s infinite;
  }

  @keyframes pulse {
    0%   { fill: rgb(169 165 138) }
    40% { fill: rgb(109 92 83) }
    60% { fill: rgb(109 92 83) }
    100% { fill: rgb(169 165 138) }
  }

`;

export default Loading;
