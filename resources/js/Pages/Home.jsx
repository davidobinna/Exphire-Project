import { Link } from "@inertiajs/react"
import Layout from "../Layouts/Layout"

export default  function Home({ name }) {
    return <>
      <h1 className="title">Hello user {name}</h1>
      <Link preserveScroll href="/" className="block title mt-[1000px]">
         {new Date().toLocaleTimeString()}
      </Link>
    </>
}
