import { useForm } from "@inertiajs/react"

export default function Create(){
const { data, setData, post, errors, processing } = useForm({
    body: "",
})

function submit(e){
    e.preventDefault();
     //console.log(data)
    post("/posts");
}

console.log(errors);

    return (
        <>
        <h1 className="title">
            Create a new post
        </h1>
        <div className="w-1/2 mx-auto">
            <form onSubmit={submit}>
            <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                <textarea
                 rows="10"
                  value={data.body}
                  onChange={(e) => setData("body", e.target.value)}
                  className={errors.body && '!ring-red-500'}
                ></textarea>
                {
                    errors.body && <p className="error">{errors.body}</p>
                }
                <button disabled={processing} className="primary-btn mt-4">
                    Create Post
                </button>
            </form>
        </div>
        </>
    )
}

