export interface Project {
    id: number,
    client: string,
    category: string,
    description: string,
    stat: string,
    statLabel: string,
    tags: string[],
    gradient: string,
    icon: React.ReactNode
    image: string
    technologies: string[]
    link: string
    github: string
    problem: string
    solution: string
}

const projects = [
    {
        
    }
]

export default projects