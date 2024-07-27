import { Link } from "react-router-dom";

function LandingPage () {
    return (
        <>
            <main className="container my-5">
    <section className="text-center">
        <h2 className="mb-4">Welcome to NoteMaster</h2>
        <p>Transform the way you manage your notes with NoteMaster. Our intuitive platform allows you to keep your notes organized, accessible, and secure, whether you're on your laptop or mobile device.</p>
        <Link to="/signup" className="btn btn-primary btn-lg">Get Started</Link>
    </section>

    <section className="mt-5">
        <h3 className="mb-4">Features that Empower You</h3>
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Seamless Multi-User Access</h5>
                        <p className="card-text">Create and manage notes with multiple user profiles, each with their own personalized space.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Effortless Organization</h5>
                        <p className="card-text">Tag and categorize your notes to keep everything organized and easily searchable.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Advanced Text Editing</h5>
                        <p className="card-text">Utilize rich text features to format your notes with bold, italics, lists, and more.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="mt-5 text-center">
        <h3 className="mb-4">Join Our Community</h3>
        <p>Be part of the NoteMaster community and take your note-taking to the next level. Whether you’re managing personal tasks or collaborating on projects, NoteMaster has you covered.</p>
        <Link to="/signup" className="btn btn-primary btn-lg">Sign Up Now</Link>
    </section>
</main>

        </>
    )
}

export default LandingPage ;