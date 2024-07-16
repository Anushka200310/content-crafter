

export default[
    {
        name: 'Content Idea Generator',
        desc: 'An AI tool that generates creative content ideas for blogs, videos, and social media.',
        category: 'Content Planning',
        icon: '/idea.png',
        aiPrompt: 'Generate 5 creative content ideas in bullet points based on the given niche and present the results in a rich text editor format.',
        slug: 'generate-content-idea',
        form: [
            {
                label: 'Enter your niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter description (optional)',
                field: 'textarea',
                name: 'description',
                required: false 
            }
        ]
    },
    {
        name: 'Article Summarizer',
        desc: 'An AI tool that creates concise and comprehensive summaries of articles.',
        category: 'Articles',
        icon: '/Summary.png',
        aiPrompt: 'Generate a concise and comprehensive summary based on the given article content and present the results in a rich text editor format.',
        slug: 'generate-article-summary',
        form: [
            {
                label: 'Enter article content',
                field: 'textarea',
                name: 'articleContent',
                required: true
            }
        ]
    },
    {
        name: 'SEO Content Optimizer',
        desc: 'An AI tool that optimizes your content for search engines to improve visibility and ranking.',
        category: 'SEO',
        icon: '/seo.png',
        aiPrompt: 'Optimize the given content for search engines, focusing on readability, keyword density, meta descriptions, and internal linking. Present the recommendations and the optimized content in a rich text editor format.',
        slug: 'optimize-seo-content',
        form: [
            {
                label: 'Enter content',
                field: 'textarea',
                name: 'content',
                required: true
            },
            {
                label: 'Enter keywords',
                field: 'input',
                name: 'keywords',
                required: false
            }
        ]
    },
    {
        name: 'Blog Generator(plagiarism free)',
        desc: 'An AI tool that generates original blog content free from plagiarism.',
        category: 'Content',
        icon: '/bloggenerator.png',
        aiPrompt: 'Generate plagiarism-free blog content based on the given topic or keywords. Ensure the content is original and provide the generated text in a rich text editor format.',
        slug: 'generate-plagiarism-free-blog',
        form: [
            {
                label: 'Enter topic',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: "Product Description Writer",
        desc: "An AI tool that writes detailed and persuasive product descriptions.",
        category: "E-commerce",
        icon: '/description.png',
        aiPrompt: "Generate 5 detailed and persuasive product descriptions in bullet points based on the given product information and present the results in a rich text editor format.",
        slug: "generate-product-description",
        form: [
            {
                label: 'Enter product information',
                field: 'textarea',
                name: 'productInfo',
                required: true
            }
        ]
    },
    {
        name: "Content Calendar Generator",
        desc: "An AI tool that creates a personalized content calendar based on your publishing schedule and target audience.",
        category: "Content Planning",
        icon: '/product-release.png',
        aiPrompt: "Generate a personalized content calendar for the next month in bullet points based on the given publishing schedule and target audience and present the results in a rich text editor format.",
        slug: "generate-content-calendar",
        form: [
            {
                label: 'Enter publishing schedule',
                field: 'textarea',
                name: 'publishingSchedule',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'targetAudience',
                required: true
            }
        ]
    },
    {
        name: "Tech Interview Question Generator",
        desc: "An AI tool that generates technical interview questions for various roles in the tech industry.",
        category: "Technology",
        icon: '/job-interview.png',
        aiPrompt: "Generate technical interview questions for a software engineer position in bullet points and present the results in a rich text editor format.",
        slug: "generate-tech-interview-questions",
        form: [
            {
                label: 'Enter interview topic',
                field: 'input',
                name: 'interviewTopic',
                required: true
            },
            {
                label: 'Enter position or role',
                field: 'input',
                name: 'position',
                required: true
            }
        ]
    },
    {
        name: 'Tech Glossary Generator',
        desc: 'An AI tool that generates a glossary of tech terms and definitions.',
        category: 'Tech',
        icon: '/tech.png',
        aiPrompt: 'Generate a glossary of tech terms and their definitions based on the specified category or theme. Present the glossary in a structured format.',
        slug: 'generate-tech-glossary',
        form: [
            {
                label: 'Enter category or theme',
                field: 'input',
                name: 'category',
                required: true
            }
        ]
    }, 
    
]