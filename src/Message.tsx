import * as React from 'react';

interface StatusMessage {
	name: string,
	status: string,
	code?: string
}

//const Message = (prop: { status: string }) => {
const Message = (props: StatusMessage) => {

	return (
		<p>The {props.name} status is: {props.status}, code is [{props.code}].</p>
	);
}

export default Message;