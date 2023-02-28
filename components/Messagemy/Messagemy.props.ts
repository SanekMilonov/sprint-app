import { ReactNode } from 'react';

export interface HtagProps {
	children: ReactNode;
}
export interface MessagemyForm {
	names: string;
	password: string;
	title: string;
	description: string;
	roles: string;
	education: string;
	contacts_email: string;
	contacts_site: string;
	myimage_upload: object;
	id: number;
	hash: string;
	session_token: string;
}

export interface MessagemyResponse {
	state: string;
	response: string;
	auth: string;
}