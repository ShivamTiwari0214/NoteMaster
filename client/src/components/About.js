import { Link} from 'react-router-dom'

function About () {
    return (
        <>
            <header className="bg-primary text-white text-center py-4">
        <h1>NoteMaster</h1>
        <p>Your Ultimate Note-Taking Companion</p>
    </header>
    
    <main className="container my-5">
        <section>
            <h2 className="mb-4">About NoteMaster</h2>
            <p>Welcome to NoteMaster, your go-to web application for seamless note-taking and organization! Whether you're a student, professional, or just someone who loves to jot down ideas, NoteMaster provides a user-friendly platform to keep your thoughts and information neatly organized.</p>
            
            <h3 className="mt-4">Features:</h3>
            <ul>
                <li><strong>Multi-User Access:</strong> Easily manage notes with different user profiles. Each user has their own secure space to create and manage their notes.</li>
                <li><strong>Organized Storage:</strong> Categorize your notes by tags or folders to find what you need quickly.</li>
                <li><strong>Rich Text Editing:</strong> Enhance your notes with rich text features including bold, italics, bullet points, and more.</li>
                <li><strong>Search Functionality:</strong> Quickly locate specific notes or keywords with our efficient search feature.</li>
                <li><strong>Cross-Device Sync:</strong> Access your notes from any device with a web browser, ensuring you never miss a detail, wherever you are.</li>
            </ul>

            <h3 className="mt-4">Get Started:</h3>
            <p>Join the NoteMaster community today and experience a new level of note-taking efficiency. <Link to="/signup" className="btn btn-primary">Sign up now</Link> and start organizing your ideas with ease!</p>
        </section>
    </main>

    <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 NoteMaster. All rights reserved.</p>
    </footer>
        </>
    )
}

export default About