import React from 'react';

const RoundButton = ({text}) => {
    return (
        <Button size='small' sx={{ borderRadius: 40, px: 3, py: 1}}>
            {text}
        </Button>
    );
};

export default RoundButton;