import { useTranslation } from 'react-i18next'
import Section from '../../ui/Section'
import SectionHeading from '../../ui/SectionHeading'
import ProjectCard from '../../ui/ProjectCard'
import styled from 'styled-components'
import { mainProjects } from '../../locales/projectsData'
import ViewAllLink from '../../ui/ViewAllLink'
import { screenWidth } from '../../styles/mediaQueries'

export const CardsBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 4em;

    @media ${screenWidth.lg} {
        align-items: stretch;
        flex-direction: row;
        gap: 4em 1em;
    }
    @media ${screenWidth.xl} {
        gap: 1em;
    }
    @media ${screenWidth.xxl} {
        gap: 5em;
    }
`

function HomeProjectsSection() {
    return (
        <Section to="nav.projects" mainPage>
            <CardsBox>
                {mainProjects.map((project) => (
                    <ProjectCard project={project} key={project.name} />
                ))}
                <ViewAllLink isMobile />
            </CardsBox>
        </Section>
    )
}

export default HomeProjectsSection
