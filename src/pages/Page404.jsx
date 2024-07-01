import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="page404">
        <img src="sad_face.jpg" alt="" />
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to={'/'} className="btn btn-primary w-32" >Go Home</Link>
    </div>
  )
}
