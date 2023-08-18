import Header from '../../components/header'
import Footer from '../../components/footer'
import ProjectSummary from '../../components/projectSummary'

function Projects() {
    return (
        <>
        <div className="bg-gray">
          <Header />
          <main className="py-10">
            <ProjectSummary />
          </main>
        </div>
        <Footer />
    </>
    );
}

export default Projects;