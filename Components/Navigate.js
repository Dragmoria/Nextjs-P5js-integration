import Link from 'next/link';

function Navigate() {
    return (
        <div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/About"><a>About</a></Link>
        </div>
    )
}

export default Navigate
