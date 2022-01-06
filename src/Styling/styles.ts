import styled from 'styled-components';

export const Boxs = styled.div`
  margin: 40px;
  border: 5px black;
`;

export const Content = styled.p`
  font-size: 16px;
  text-align: center;
`;

const theme = {
    background: '#aaa',
    color: '#24292e'
}

export const styles = (theme: { background: any; color: any; }) => ({
    wrapper: {
        padding: 40,
        background: theme.background,
        textAlign: 'center'
    },
    title: {
        font: {
            size: 40,
            weight: 900,
        },
        color: (props: { color: any; }) => props.color
    },
    link: {
        color: theme.color,
        '&:hover': {
            opacity: 0.5
        }
    }
})
