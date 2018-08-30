import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  margin: 20px auto;
  padding: 20px;
  background: #f8f8ff;
  overflow: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default (props) => {
  return (
    <>
      <Wrapper>
        {props.children}
      </Wrapper>
      <style jsx global>{`
        html {
          box-sizing: border-box;
        }

        *, *:after, *:before {
          box-sizing: inherit;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          margin: 0;
          padding: 0;
        }

      `}</style>
    </>
  );
}