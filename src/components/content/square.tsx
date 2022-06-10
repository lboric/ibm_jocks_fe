import React, { FC } from 'react'

type Props = {
    black: boolean;
    children?: React.ReactNode;
}

const Square: FC<Props> = (props) => {
    const { black, children } = props;
    const fill = 'green';
    const stroke = 'green';

    return (
        <div
            style={{
                backgroundColor: fill,
                color: stroke,
                width: '100%',
                height: '100%'
            }}
        >
            {children}
        </div>
    )
}

export default Square