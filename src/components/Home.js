import React from 'react';
export function Stateless() {
    return <div>Stateless</div>;
}

export class Stateful extends React.Component {
    render() {
        return <div>Stateful</div>;
    }
}