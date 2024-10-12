interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'AutoInsights', // Site author
	title: 'AutoInsights', // Site title.
	description: 'Blog en español con novedades sobre autos en México', // Description to display in the meta tags
	lang: 'es',
	ogLocale: 'es',
	shareMessage: 'Compartir', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
