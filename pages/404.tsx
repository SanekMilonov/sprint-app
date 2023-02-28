import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { withLayout } from '../layout/Layout';
import { Container } from 'react-bootstrap';

export function Error404(): JSX.Element {
	return (
		<>
			<Head>
				<title>Ошибка 404 - Sprint Site</title>
			</Head>
			<section className='bg0 bgerr'>
				<Container>
					<div>
						<h1 className="err" title="404!">404!</h1>
						<Link href="/" className="btnfos btnfos-5">
							На главную
						</Link>
					</div>
				</Container>
			</section>
		</>
	);
}

export default withLayout(Error404);