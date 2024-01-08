'use client'

export default function ErrorCloud({error}: {error: Error}) {
    return (
        <h1>
            Ooops!!!! {error.message}
        </h1>
    )
}
