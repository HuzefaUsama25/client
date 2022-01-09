import { React, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import LoadingPage from './LoadingPage'
import RecipiePreview from './RecipiePreview'


export default function RecipieList() {

    const { title } = useParams()
    const [results, setResults] = useState([])
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        console.log("use effect ran")
        fetch(`http://localhost:8082/api/recipies/q=${title}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setResults(data)
                setIsPending(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            {isPending && <LoadingPage></LoadingPage>}
            {!isPending && <div className='results-page'>
                <div className="flex-container-result">
                    <Link to="/"><div className='go-back'> &#x2190;</div></Link>
                    <h1 className='title-h1'>Results for <span>"{title}"</span></h1>

                </div>

                {
                    results.map(
                        (result) => {
                            return <RecipiePreview
                                title={result.title}
                                chef={result.chef}
                                key={result._id}
                                id={result._id}
                            />
                        }
                    )
                }
            </div >
            }
        </>
    )
}
