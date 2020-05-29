import React, { ReactElement } from 'react'

interface Props {
    children: any;
    wide?: boolean;
}

export default function Container({ children, wide }: Props): ReactElement {
    return (
        <div>
            { children }
        </div>
    )
}
