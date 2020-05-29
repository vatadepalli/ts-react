import React, { ReactElement, useEffect } from 'react'
import Container from './Container';

interface Props {
    title: string;
    children: any;
    wide?: boolean;
}

export default function Page({ title, children, wide }: Props): ReactElement {
    useEffect(() => {
        document.title = `${title} | RNBasic`
        window.scrollTo(0,0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <Container wide={wide}>
            { children }
        </Container>
    )
}
