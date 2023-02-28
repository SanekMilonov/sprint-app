export interface blockAbout {
	about_meta: string
	about_h4: string
	about_text: string
	about_link: string
	about_link2: string
}

export interface blockPrice {
	blok1_name: string
	blok1_text: string
	blok1_price: string
	blok1_href: string
	blok1_color: string
	about_meta: string
	about_h4: string
	about_text: string
	about_link: string
	about_link2: string
	map: any
}

export interface blockPortfolio {
	[x: string]: any
	ID: number
	post_content: string
	post_title: string
	post_excerpt: string
	post_name: string
	img: string
	map: any
	title: any
	year: any
	proc: any
}

export interface menuSidebar {
	term_id: number,
	name: string,
	slug: string,
	taxonomy: string,
	count: number,
}

export interface portfoliopage {
	[x: string]: any
	ID: string,
	post_content: string,
	post_title: string,
	url: string,
	post_name: string,
	cms: any,
	servic: any,
	do_pk: string,
	posle_pk: string,
	do_mob: string,
	posle_mob: string,
	img_site: string,
	text_site_izmen: any,
	img_site_izmen: any,
}

export interface pageposting {
	page: string
}

export interface blockstati {
	map(arg0: (post: any) => JSX.Element): import("react").ReactNode
	ID: number
	title: string
	year: string
	proc: string
}