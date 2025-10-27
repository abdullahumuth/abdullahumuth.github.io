export const profile = {
	fullName: 'Abdullah Umut Hamzaoğulları',
	title: 'senior computer engineering & physics double major student',
	institute: 'Boğaziçi University, Istanbul',
	author_name: 'Abdullah Umut Hamzaoğulları', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'AI for Scientific Discovery', description: 'Using machine learning to accelerate scientific progress, particularly in theoretical physics', field: 'physics' },
		{ title: 'Theoretical & Computational Physics', description: 'Foundations of physics, quantum algorithms, relativity', field: 'physics' },
		{ title: 'Deep Learning & Symbolic AI', description: 'Transformer architectures, representation learning, and symbolic regression for interpretable models', field: 'cs' },
		{ title: 'Physics-Informed Machine Learning', description: 'Incorporating physical laws and symmetries into neural network architectures', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'abdullahumuth@gmail.com',
	linkedin: 'https://www.linkedin.com/in/abdullah-umut-hamzao%C4%9Fullar%C4%B1-17893b221',
	bluesky: 'https://bsky.app/profile/abdullahumuth.bsky.social',
	github: 'https://github.com/abdullahumuth',
	gitlab: '',
	scholar: '',
	inspire: '',
	x: '',
	arxiv: 'https://arxiv.org/a/abdullahumuth.htm',
}

export const template = {
	website_url: 'https://abdullahumuth.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Abdullah Umut Hamzaoğulları | Personal Website',
	default_description: 'I am a senior undergraduate double major student in physics and computer engineering, working on AI for theoretical physics.',
	default_image: '/social-preview.png',
}
